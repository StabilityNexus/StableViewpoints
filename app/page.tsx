"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { getPaginatedPosts } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

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

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [paginatedData, setPaginatedData] = useState<PaginatedData | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)

  // Get current page from URL
  const getPageFromUrl = useCallback(() => {
    const pageParam = searchParams.get("page")
    if (!pageParam) return 1
    const page = Number.parseInt(pageParam, 10)
    return isNaN(page) || page < 1 ? 1 : page
  }, [searchParams])

  // Update current page when URL changes
  useEffect(() => {
    const urlPage = getPageFromUrl()
    if (urlPage !== currentPage) {
      setCurrentPage(urlPage)
    }
  }, [searchParams, getPageFromUrl, currentPage])

  // Load posts when current page changes
  useEffect(() => {
    function loadPosts() {
      setLoading(true)
      try {
        const data = getPaginatedPosts(currentPage, 12)
        setPaginatedData(data)
      } catch (error) {
        console.error("Error loading posts:", error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [currentPage])

  const handlePageChange = useCallback(
    (page: number) => {
      if (page < 1) page = 1
      setCurrentPage(page)
      router.push(`/?page=${page}`, { scroll: false })
    },
    [router],
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#228B22] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading articles...</p>
        </div>
      </div>
    )
  }

  if (!paginatedData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Failed to load articles.</p>
        </div>
      </div>
    )
  }

  const { posts, totalPages, hasNextPage, hasPrevPage } = paginatedData

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10">
      <Navbar />

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          hasNextPage={hasNextPage}
          hasPrevPage={hasPrevPage}
          onPageChange={handlePageChange}
        />
      </main>

      <Footer />
    </div>
  )
}
