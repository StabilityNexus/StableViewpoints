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
  articles: Omit<BlogPost, "content">[]
}

let articlesCache: BlogPost[] | null = null

export async function getAllPosts(): Promise<BlogPost[]> {
  if (articlesCache) {
    return articlesCache
  }

  try {
    // Fetch the articles index
    const indexResponse = await fetch("/articles/articles-index.json")
    if (!indexResponse.ok) {
      throw new Error("Failed to fetch articles index")
    }

    const indexData: ArticleIndex = await indexResponse.json()

    // Fetch content for each article
    const postsWithContent = await Promise.all(
      indexData.articles.map(async (article) => {
        try {
          const contentResponse = await fetch(`/articles/${article.slug}.md`)
          if (!contentResponse.ok) {
            throw new Error(`Failed to fetch content for ${article.slug}`)
          }

          const rawContent = await contentResponse.text()

          // Parse frontmatter and content
          const { data: frontmatter, content } = matter(rawContent)

          // Use frontmatter data if available, otherwise fall back to index data
          return {
            slug: article.slug,
            title: frontmatter.title || article.title,
            author: frontmatter.author || article.author,
            date: frontmatter.date || article.date,
            image: frontmatter.image || article.image,
            excerpt: frontmatter.excerpt || article.excerpt,
            featured: frontmatter.featured !== undefined ? frontmatter.featured : article.featured,
            content: content.trim(), // Only the content without frontmatter
          }
        } catch (error) {
          console.error(`Error loading article ${article.slug}:`, error)
          return {
            ...article,
            content: `# ${article.title}\n\nContent could not be loaded.`,
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
