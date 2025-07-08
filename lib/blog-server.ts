import fs from "fs"
import path from "path"
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

// Server-side function to load all blog posts at build time
export async function getAllPostsServer(): Promise<BlogPost[]> {
  try {
    // Read the articles index file from the file system
    const indexPath = path.join(process.cwd(), "public", "articles", "articles-index.json")
    const indexContents = fs.readFileSync(indexPath, "utf8")
    const indexData: ArticleIndex = JSON.parse(indexContents)

    // Load content for each article
    const postsWithContent = indexData.articles.map((article) => {
      try {
        const contentPath = path.join(process.cwd(), "public", "articles", `${article.slug}.md`)
        const rawContent = fs.readFileSync(contentPath, "utf8")

        // Parse frontmatter and content - only extract content, ignore frontmatter data
        const { content } = matter(rawContent)

        // Use only data from articles-index.json
        return {
          slug: article.slug,
          title: article.title,
          author: article.author,
          date: article.date,
          image: article.image,
          excerpt: article.excerpt,
          featured: article.featured,
          content: content.trim(), // Only the content without frontmatter
        }
      } catch (error) {
        console.error(`Error loading article ${article.slug}:`, error)
        return {
          ...article,
          content: `# ${article.title}\n\nContent could not be loaded.`,
        }
      }
    })

    // Sort posts: featured first, then by date (newest first)
    const sortedPosts = postsWithContent.sort((a, b) => {
      // If one is featured and the other isn't, featured comes first
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1

      // If both have the same featured status, sort by date
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

    return sortedPosts
  } catch (error) {
    console.error("Error loading articles:", error)
    return []
  }
}

export function getPostBySlugServer(posts: BlogPost[], slug: string): BlogPost | null {
  return posts.find((post) => post.slug === slug) || null
}

export function getPaginatedPostsServer(
  posts: BlogPost[],
  page = 1,
  limit = 6,
): {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
} {
  const totalPosts = posts.length
  const totalPages = Math.ceil(totalPosts / limit)
  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit
  const paginatedPosts = posts.slice(startIndex, endIndex)

  return {
    posts: paginatedPosts,
    totalPages,
    currentPage: page,
    hasNextPage: page < totalPages,
    hasPrevPage: page > 1,
  }
}
