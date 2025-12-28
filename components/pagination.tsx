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
      <div className="flex items-center justify-center gap-2 mt-12">
        {/* Previous Button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={!hasPrevPage || currentPage <= 1}
          className={`flex items-center gap-1 px-4 py-2 transition-colors shadow-sm ${
            hasPrevPage && currentPage > 1
              ? "bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22] hover:text-white dark:hover:bg-[#3E921E] dark:hover:text-white cursor-pointer"
              : "bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {/* Page Numbers */}
        <div className="flex items-center gap-1">
          {getPageNumbers().map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`px-4 py-2 transition-colors ${
                pageNum === currentPage
                  ? "bg-gradient-to-r from-[#228B22] to-[#91A511] text-white shadow-md cursor-default"
                  : "bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22]/10 dark:hover:bg-slate-800 cursor-pointer"
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
          className={`flex items-center gap-1 px-4 py-2 transition-colors shadow-sm ${
            hasNextPage && currentPage < totalPages
              ? "bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22] hover:text-white dark:hover:bg-[#3E921E] dark:hover:text-white cursor-pointer"
              : "bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
          }`}
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    )
  }

  // Otherwise, use Link for server-side navigation
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      {hasPrevPage && currentPage > 1 ? (
        <Link
          href={`/?page=${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 transition-colors shadow-sm bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22] hover:text-white dark:hover:bg-[#3E921E] dark:hover:text-white cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 px-4 py-2 transition-colors shadow-sm bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((pageNum) => (
          pageNum === currentPage ? (
            <span
              key={pageNum}
              className="px-4 py-2 bg-gradient-to-r from-[#228B22] to-[#91A511] text-white shadow-md cursor-default"
            >
              {pageNum}
            </span>
          ) : (
            <Link
              key={pageNum}
              href={`/?page=${pageNum}`}
              className="px-4 py-2 transition-colors bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22]/10 dark:hover:bg-slate-800 cursor-pointer"
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
          className="flex items-center gap-1 px-4 py-2 transition-colors shadow-sm bg-white dark:bg-slate-900 border border-[#228B22]/20 dark:border-white/20 text-[#228B22] dark:text-amber-200 hover:bg-[#228B22] hover:text-white dark:hover:bg-[#3E921E] dark:hover:text-white cursor-pointer"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <button
          disabled
          className="flex items-center gap-1 px-4 py-2 transition-colors shadow-sm bg-gray-100 dark:bg-slate-800 text-gray-400 dark:text-gray-500 cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}
