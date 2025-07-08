import { getPaginatedPosts } from "@/lib/blog"
import BlogCard from "@/components/blog-card"
import Pagination from "@/components/pagination"
import Link from "next/link"
import Footer from "@/components/footer"

interface HomePageProps {
  searchParams: Promise<{ page?: string }>
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams
  const currentPage = Number.parseInt(params.page || "1", 10)
  const { posts, totalPages, hasNextPage, hasPrevPage } = await getPaginatedPosts(currentPage, 6)

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
            target="_blank"
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
        />
      </main>

      <Footer />
    </div>
  )
}
