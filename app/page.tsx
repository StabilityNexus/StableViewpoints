"use client"

import { useEffect, useState, useCallback } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { getPaginatedPosts } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import Pagination from "@/components/pagination"
import Link from "next/link"
import Footer from "@/components/footer"

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
  const pathname = usePathname()
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
    async function loadPosts() {
      setLoading(true)
      try {
        const data = await getPaginatedPosts(currentPage, 6)
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
      console.log("handlePageChange");
      console.log(page);
      // Ensure page is valid
      if (page < 1) page = 1

      // Update state immediately
      setCurrentPage(page)

      // Update URL
      //if (page === 1) {
        // For page 1, use the root path
        //router.push("/", { scroll: false })
      //} else {
        // For other pages, use query parameter
        router.push(`/?page=${page}`, { scroll: false })
      //}
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
      {/* Header */}
      <header className="border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#5A981A] via-[#91A511] via-[#ADAC0D] via-[#E4B905] to-[#FFBF00] bg-clip-text text-transparent drop-shadow-sm leading-tight pb-2">
              Stable Viewpoints
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Independent Articles about Stability</p>
          </div>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#228B22] to-[#91A511] hover:from-[#3E921E] hover:to-[#ADAC0D] text-white px-6 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Submit an Article
          </Link>
        </div>
      </header>

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
