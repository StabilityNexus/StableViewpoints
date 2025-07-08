"use client"
import { getAllPostsServer } from "@/lib/blog-server"
import HomeClient from "@/components/home-client"

export default async function HomePage() {
  // Load all posts at build time (server-side)
  const allPosts = await getAllPostsServer()

  return <HomeClient allPosts={allPosts} />
}
