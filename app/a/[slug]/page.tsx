import { BlogPost, getPostBySlug, getAllPosts } from "@/lib/blog"
import BlogPostPage from "./BlogPostClient"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export default async function Page(props: { params: { slug: string } }) {
  const { slug } = props.params  
  const post = getPostBySlug(slug)

  if (!post) {
    notFound() 
  }

  return <BlogPostPage post={post} />
}
