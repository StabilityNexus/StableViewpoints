"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

interface PaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
  onPageChange?: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  hasNextPage,
  hasPrevPage,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages = []
    const showPages = 5 // Show 5 page numbers at most

    let startPage = Math.max(1, currentPage - Math.floor(showPages / 2))
    const endPage = Math.min(totalPages, startPage + showPages - 1)

    // Adjust start page if we're near the end
    if (endPage - startPage + 1 < showPages) {
      startPage = Math.max(1, endPage - showPages + 1)
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    return pages
  }

  // If onPageChange is provided, use it for client-side navigation
  if (onPageChange) {
    return (
      <div className="mt-12 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevPage || currentPage <= 1}
          aria-label="Previous page"
          className={`flex items-center gap-1 px-2 py-2 transition-colors shadow-sm sm:px-4 ${
            hasPrevPage && currentPage > 1
              ? "bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-2 py-2 transition-colors sm:px-4 ${
                pageNum === currentPage
                  ? "bg-gradient-to-r from-[#228B22] to-[#91A511] text-white shadow-md cursor-default"
                  : "bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22]/10 cursor-pointer"
              }`}
            >
              {pageNum}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={!hasNextPage || currentPage >= totalPages}
          aria-label="Next page"
          className={`flex items-center gap-1 px-2 py-2 transition-colors shadow-sm sm:px-4 ${
            hasNextPage && currentPage < totalPages
              ? "bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white cursor-pointer"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          }`}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  // Otherwise, use Link for server-side navigation
  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-1 sm:gap-2">
      {/* Previous Button */}
      {hasPrevPage && currentPage > 1 ? (
        <Link
          href={`/?page=${currentPage - 1}`}
          aria-label="Previous page"
          className="flex items-center gap-1 px-2 py-2 transition-colors shadow-sm bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white cursor-pointer sm:px-4"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </Link>
      ) : (
        <button
          disabled
          aria-label="Previous page"
          className="flex items-center gap-1 px-2 py-2 transition-colors shadow-sm bg-gray-100 text-gray-400 cursor-not-allowed sm:px-4"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Previous</span>
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-0.5 sm:gap-1">
        {getPageNumbers().map((pageNum) => (
          pageNum === currentPage ? (
            <span
              key={pageNum}
              className="px-2 py-2 bg-gradient-to-r from-[#228B22] to-[#91A511] text-white shadow-md cursor-default sm:px-4"
            >
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={`/?page=${pageNum}`}
              className="px-2 py-2 transition-colors bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22]/10 cursor-pointer sm:px-4"
            >
              {pageNum}
            </Link>
          )
        ))}
      </div>

      {/* Next Button */}
      {hasNextPage && currentPage < totalPages ? (
        <Link
          href={`/?page=${currentPage + 1}`}
          aria-label="Next page"
          className="flex items-center gap-1 px-2 py-2 transition-colors shadow-sm bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white cursor-pointer sm:px-4"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <button
          disabled
          aria-label="Next page"
          className="flex items-center gap-1 px-2 py-2 transition-colors shadow-sm bg-gray-100 text-gray-400 cursor-not-allowed sm:px-4"
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
