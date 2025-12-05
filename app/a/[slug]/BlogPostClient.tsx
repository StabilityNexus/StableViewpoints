"use client"

import Link from "next/link"
import { ArrowLeft, Calendar, User } from "lucide-react"
import Image from "next/image"
import { MarkdownRenderer } from "@/lib/markdown-renderer"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"
import { BlogPost } from "@/lib/blog"

export default function BlogPostPage({ post }: { post: BlogPost }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 dark:from-slate-950 dark:via-emerald-950 dark:to-slate-900 transition-colors">
      {/* Header */}
      <header className="border-b border-[#228B22]/10 dark:border-white/10 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#228B22] hover:text-[#3E921E] dark:text-amber-200 dark:hover:text-amber-300 transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stable Viewpoints
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white dark:bg-slate-900/70 shadow-xl overflow-hidden border border-[#228B22]/10 dark:border-white/10 transition-colors">
          {/* Hero Image */}
          {post.image && (
            <div className="relative h-64 md:h-96">
              <Image 
                src={
                  post.image.startsWith("/") 
                    ? `${post.image}` 
                    : post.image
                }
                alt={post.title} 
                fill 
                className="object-cover" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}

          {/* Content */}
          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#91A511] to-[#E4B905] bg-clip-text text-transparent mb-6 leading-tight pb-2">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300 mb-8 pb-8 border-b border-[#228B22]/15 dark:border-white/10">
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

            <div className="prose prose-lg max-w-none dark:prose-invert">
              <MarkdownRenderer content={post.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-[#228B22]/15 dark:border-white/10">
              <p className="text-sm text-gray-500 dark:text-gray-400 italic">
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
