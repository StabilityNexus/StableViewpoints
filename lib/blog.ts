import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/articles")

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

export async function getAllPosts(): Promise<BlogPost[]> {
  // Ensure the directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "Untitled",
        author: data.author || "Anonymous",
        date: data.date || new Date().toISOString(),
        image: data.image || "/placeholder.svg?height=400&width=600",
        excerpt: data.excerpt || content.slice(0, 150) + "...",
        content,
        featured: data.featured || false,
      }
    })

  // Sort posts: featured first, then by date (newest first)
  return allPostsData.sort((a, b) => {
    // If one is featured and the other isn't, featured comes first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    // If both have the same featured status, sort by date
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title || "Untitled",
      author: data.author || "Anonymous",
      date: data.date || new Date().toISOString(),
      image: data.image || "/placeholder.svg?height=400&width=600",
      excerpt: data.excerpt || content.slice(0, 150) + "...",
      content,
      featured: data.featured || false,
    }
  } catch (error) {
    return null
  }
}

export async function getPaginatedPosts(
  page = 1,
  limit = 15,
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
