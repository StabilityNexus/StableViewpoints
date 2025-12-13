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
      <article
        className="
          relative
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-lg
          border
          bg-white
          shadow-md
          transition
          md:hover:-translate-y-1
          md:hover:shadow-xl
        "
      >
        {post.featured && (
          <div className="absolute right-3 top-3 z-20">
            <Star className="h-5 w-5 fill-[#FFBF00] text-[#FFBF00]" />
          </div>
        )}

        {/* Image */}
        <div className="relative w-full">
          <Image
            src={post.image.startsWith("/") ? post.image : post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="h-auto w-full object-contain transition-transform duration-500 md:group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-[#FFBF00]/10 opacity-0 transition-opacity duration-300 md:group-hover:opacity-100" />
        </div>

        {/* Content */}
        <div className="flex flex-grow flex-col p-4 sm:p-6">
          <h2
            className="
              mb-3
              line-clamp-2
              text-lg
              font-bold
              text-gray-900
              transition-all
              duration-300
              sm:text-xl
              md:group-hover:bg-gradient-to-r
              md:group-hover:from-[#228B22]
              md:group-hover:to-[#91A511]
              md:group-hover:bg-clip-text
              md:group-hover:text-transparent
            "
          >
            {post.title}
          </h2>

          <p className="mb-4 line-clamp-3 text-sm sm:text-base text-gray-600">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center gap-1 text-sm text-gray-500">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
