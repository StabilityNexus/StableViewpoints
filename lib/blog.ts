"use client"

import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  content: string
  featured: boolean
}

interface ArticleIndex {
  articles: string[]
}

let articlesCache: BlogPost[] | null = null

export async function getAllPosts(): Promise<BlogPost[]> {
  if (articlesCache) {
    return articlesCache
  }

  try {
    // Fetch the articles index (just slugs now)
    const indexResponse = await fetch("/articles/articles-index.json")
    if (!indexResponse.ok) {
      throw new Error("Failed to fetch articles index")
    }

    const indexData: ArticleIndex = await indexResponse.json()

    // Fetch content and metadata for each article from frontmatter
    const postsWithContent = await Promise.all(
      indexData.articles.map(async (slug) => {
        try {
          const contentResponse = await fetch(`/articles/${slug}.md`)
          if (!contentResponse.ok) {
            throw new Error(`Failed to fetch content for ${slug}`)
          }

          const rawContent = await contentResponse.text()

          // Parse frontmatter and content
          const { data: frontmatter, content } = matter(rawContent)

          // Extract all metadata from frontmatter
          return {
            slug,
            title: frontmatter.title || "Untitled",
            author: frontmatter.author || "Anonymous",
            date: frontmatter.date || new Date().toISOString(),
            image: frontmatter.image || "/placeholder.svg?height=400&width=600",
            excerpt: frontmatter.excerpt || content.slice(0, 150) + "...",
            featured: frontmatter.featured || false,
            content: content.trim(), // Only the content without frontmatter
          }
        } catch (error) {
          console.error(`Error loading article ${slug}:`, error)
          return {
            slug,
            title: "Article Not Found",
            author: "Unknown",
            date: new Date().toISOString(),
            image: "/placeholder.svg?height=400&width=600",
            excerpt: "This article could not be loaded.",
            featured: false,
            content: `# Article Not Found\n\nThe article "${slug}" could not be loaded.`,
          }
        }
      }),
    )

    // Sort posts: featured first, then by date (newest first)
    const sortedPosts = postsWithContent.sort((a, b) => {
      // If one is featured and the other isn't, featured comes first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1

      // If both have the same featured status, sort by date
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    articlesCache = sortedPosts
    return sortedPosts
  } catch (error) {
    console.error("Error loading articles:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const allPosts = await getAllPosts()
  return allPosts.find((post) => post.slug === slug) || null
}

export async function getPaginatedPosts(
  page = 1,
  limit = 6,
): Promise<{
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
}> {
  const allPosts = await getAllPosts()
  const totalPosts = allPosts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const posts = allPosts.slice(startIndex, endIndex)

  return {
    posts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}
