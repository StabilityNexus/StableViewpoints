"use client"

import blogData from "./blog-data.json"

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

// Get all posts from static data
export function getAllPosts(): BlogPost[] {
  // Sort posts: featured first, then by date (newest first)
  const sortedPosts = [...blogData.posts].sort((a, b) => {
    // If one is featured and the other isn't, featured comes first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1

    // If both have the same featured status, sort by date
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return sortedPosts
}

export function getPostBySlug(slug: string): BlogPost | null {
  const allPosts = getAllPosts()
  return allPosts.find((post) => post.slug === slug) || null
}

export function getPaginatedPosts(
  page = 1,
  limit = 6,
): {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  hasNextPage: boolean
  hasPrevPage: boolean
} {
  const allPosts = getAllPosts()
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
