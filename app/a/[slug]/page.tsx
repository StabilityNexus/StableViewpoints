import BlogPostClientPage from "./BlogPostClientPage"
import fs from "fs"
import path from "path"

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    // Read the articles index file from the file system
    const filePath = path.join(process.cwd(), "public", "articles", "articles-index.json")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const data = JSON.parse(fileContents)

    // Return array of slug parameters
    return data.articles.map((article: { slug: string }) => ({
      slug: article.slug,
    }))
  } catch (error) {
    console.error("Error generating static params:", error)
    return []
  }
}

export default function BlogPostPage() {
  return <BlogPostClientPage />
}
