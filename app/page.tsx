"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { getPaginatedPosts } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import Pagination from "@/components/pagination"
import Footer from "@/components/footer"
import SiteHeader from "@/components/site-header"
import Loading from "@/app/loading"
import type { PaginatedPosts } from "@/types/blog"

export default function HomePage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [paginatedData, setPaginatedData] = useState<PaginatedPosts | null>(null)
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
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [router],
  )

  if (loading) {
    return <Loading message="Loading articles..." />
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
      <SiteHeader homePage />

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
