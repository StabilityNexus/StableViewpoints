import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import articlesIndex from '../public/articles/articles-index.json'

export interface BlogPost {
  slug: string
  title: string
  author: string
  date: string
  image: string
  excerpt: string
  content: string
  featured: boolean
}

// Server-side function to get post by slug with actual markdown content
export function getPostBySlugServer(slug: string): BlogPost | null {
  try {
    const markdownPath = join(process.cwd(), 'public/articles', `${slug}.md`)
    
    if (existsSync(markdownPath)) {
      const fileContents = readFileSync(markdownPath, 'utf8')
      const { content } = matter(fileContents)
      
      // Find the article metadata from the index
      const articleMetadata = articlesIndex.articles.find(article => article.slug === slug)
      
      if (!articleMetadata) {
        return null
      }

      return {
        ...articleMetadata,
        content
      }
    } else {
      // Fallback: return post with placeholder content
      const articleMetadata = articlesIndex.articles.find(article => article.slug === slug)
      if (!articleMetadata) {
        return null
      }
      
      return {
        ...articleMetadata,
        content: `# ${articleMetadata.title}\n\nThis is a placeholder content for ${articleMetadata.title}. The full content would be loaded from the markdown file.`
      }
    }
  } catch (error) {
    console.error(`Error reading markdown file for ${slug}:`, error)
    return null
  }
} 