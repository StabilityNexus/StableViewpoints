import { getPostBySlugServer } from "@/lib/blog-server"
import BlogPostPage from "./BlogPostClient"
import { notFound } from "next/navigation"
import articlesIndex from '../../../public/articles/articles-index.json'

export async function generateStaticParams() {
  // Use articles-index.json directly for static generation
  return articlesIndex.articles.map((article) => ({ slug: article.slug }))
}

export default async function Page(props: { params: { slug: string } }) {
  const { slug } = await props.params  
  const post =getPostBySlugServer(slug)

  if (!post) {
    notFound() 
  }

  return <BlogPostPage post={post} />
}
