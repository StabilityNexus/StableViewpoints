import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Image from "next/image"
import { MarkdownRenderer } from "@/lib/markdown-renderer"
import Footer from "@/components/footer"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Stable Viewpoints`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10">
      {/* Header */}
      <header className="border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#228B22] hover:text-[#3E921E] transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stable Viewpoints
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-xl overflow-hidden border border-gradient-to-r from-[#228B22]/10 to-[#FFBF00]/10">
          {/* Hero Image */}
          {post.image && (
            <div className="relative h-64 md:h-96">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#91A511] to-[#E4B905] bg-clip-text text-transparent mb-6 leading-tight pb-2">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#228B22]" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E4B905]" />
                <span>
                  {new Date(post.date).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <MarkdownRenderer content={post.content} />
            </div>

            {/* Copyright Statement */}
            <div className="mt-12 pt-8 border-t border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20">
              <p className="text-sm text-gray-500 italic">
                © {new Date(post.date).getFullYear()} {post.author}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
