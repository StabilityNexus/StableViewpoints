import { getPostBySlugServer } from "@/lib/blog-server"
import BlogPostPage from "./BlogPostClient"
import { notFound } from "next/navigation"
import articlesIndex from '../../../public/articles/articles-index.json'
import type { Metadata } from "next"
import { getAbsoluteUrl, getOgImageUrl } from "@/lib/metadata"

export async function generateStaticParams() {
  // Use articles-index.json directly for static generation
  return articlesIndex.articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params
  const post = getPostBySlugServer(slug)

  if (!post) {
    return {}
  }

  const title = post.title
  const description = post.excerpt
  const postUrl = getAbsoluteUrl(`/a/${slug}`)
  const imageUrl = getOgImageUrl(post.image)

  return {
    title,
    description,
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      type: "article",
      url: postUrl,
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params  
  const post = getPostBySlugServer(slug)

  if (!post) {
    notFound() 
  }

  return <BlogPostPage post={post} />
}

