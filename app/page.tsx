"use client"
import { getAllPostsServer } from "@/lib/blog-server"
import HomeClient from "@/components/home-client"

interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  featured: boolean
}

interface PaginatedData {
  posts: BlogPost[]
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default async function HomePage() {
  // Load all posts at build time
  const allPosts = await getAllPostsServer()

  return <HomeClient allPosts={allPosts} />
}
