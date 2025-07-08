import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  currentPage: number
  totalPages: number
  hasNextPage: boolean
  hasPrevPage: boolean
}

export default function Pagination({ currentPage, totalPages, hasNextPage, hasPrevPage }: PaginationProps) {
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

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      {hasPrevPage ? (
        <Link
          href={currentPage === 2 ? "/" : `/?page=${currentPage - 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white transition-colors shadow-sm"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Link>
      ) : (
        <div className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-400 cursor-not-allowed">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </div>
      )}

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((pageNum) => (
          <Link
            key={pageNum}
            href={pageNum === 1 ? "/" : `/?page=${pageNum}`}
            className={`px-4 py-2 transition-colors ${
              pageNum === currentPage
                ? "bg-gradient-to-r from-[#228B22] to-[#91A511] text-white shadow-md"
                : "bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22]/10"
            }`}
          >
            {pageNum}
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {hasNextPage ? (
        <Link
          href={`/?page=${currentPage + 1}`}
          className="flex items-center gap-1 px-4 py-2 bg-white border border-[#228B22]/20 text-[#228B22] hover:bg-[#228B22] hover:text-white transition-colors shadow-sm"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Link>
      ) : (
        <div className="flex items-center gap-1 px-4 py-2 bg-gray-100 text-gray-400 cursor-not-allowed">
          Next
          <ChevronRight className="w-4 h-4" />
        </div>
      )}
    </div>
  )
}
