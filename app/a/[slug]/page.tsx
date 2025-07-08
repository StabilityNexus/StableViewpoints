import BlogPostClientPage from "./BlogPostClientPage"

// Generate static params for all blog posts
export async function generateStaticParams() {
  try {
    // Fetch the articles index
    const response = await fetch(
      `${process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""}/articles/articles-index.json`,
    )
    if (!response.ok) {
      console.error("Failed to fetch articles index for static generation")
      return []
    }

    const data = await response.json()

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
