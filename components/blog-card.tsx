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
      <article className="relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {post.featured && (
          <div className="absolute top-3 right-3 z-20">
            <Star className="h-5 w-5 fill-[#FFBF00] text-[#FFBF00] drop-shadow-sm" />
          </div>
        )}

        <div className="relative w-full">
          <Image
            src={post.image.startsWith("/") ? post.image : post.image}
            alt={post.title}
            width={1200}
            height={630}
            className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#228B22]/10 via-transparent to-[#FFBF00]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <div className="flex flex-grow flex-col p-6">
          {/* ✅ FIXED TITLE */}
          <h2
            className="
              mb-3 line-clamp-2 text-xl font-bold
              text-foreground
              transition-all duration-300
              group-hover:bg-gradient-to-r
              group-hover:from-[#228B22]
              group-hover:to-[#91A511]
              group-hover:bg-clip-text
              group-hover:text-transparent
              dark:group-hover:bg-none
              dark:group-hover:text-foreground
            "
          >
            {post.title}
          </h2>

          <p className="mb-4 line-clamp-3 text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-1 transition-colors group-hover:text-[#228B22]">
              <User className="h-4 w-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}
