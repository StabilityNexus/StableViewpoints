import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Star } from "lucide-react"

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
    <Link href={`/a/${post.slug}`} className="group">
      <article className="bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gradient-to-r from-[#228B22]/10 to-[#FFBF00]/10 relative">
        {/* Featured Badge */}
        {post.featured && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#E4B905] to-[#FFBF00] text-white px-3 py-1 text-sm font-semibold flex items-center gap-1 shadow-lg">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </div>
        )}

        {/* Image - Square aspect ratio */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-[#FFBF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:bg-gradient-to-r group-hover:from-[#228B22] group-hover:to-[#91A511] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {post.title}
          </h2>

          <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center gap-1 group-hover:text-[#228B22] transition-colors">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            {/*<div className="flex items-center gap-1 group-hover:text-[#E4B905] transition-colors">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div> */}
          </div>
        </div>
      </article>
    </Link>
  )
}
