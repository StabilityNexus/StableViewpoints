import Image from "next/image"
import Link from "next/link"
import { User, Star } from "lucide-react"

interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  featured: boolean
}

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/a/${post.slug}`} className="group h-full">
      <article className="flex flex-col h-full bg-white/95 dark:bg-slate-900/80 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-[#228B22]/10 dark:border-white/10 relative rounded-lg">
      <article className="flex flex-col h-full bg-white dark:bg-gray-800 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gradient-to-r from-[#228B22]/10 to-[#FFBF00]/10 relative rounded-lg">

        {post.featured && (
          <div className="absolute top-3 right-3 z-20">
            <Star className="w-5 h-5 fill-[#FFBF00] text-[#FFBF00] drop-shadow-sm" />
          </div>
        )}

        <div className="relative w-full">
          <Image
            src={
              post.image.startsWith("/")
                ? `${post.image}`
                : post.image
            }
            alt={post.title}
            width={1200}
            height={630}
            className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-[#FFBF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <div className="flex flex-col flex-grow p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-[#228B22] group-hover:to-[#91A511] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {post.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="mt-auto flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1 group-hover:text-[#228B22] transition-colors">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
