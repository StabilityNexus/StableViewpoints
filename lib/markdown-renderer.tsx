import ReactMarkdown from "react-markdown"
import type { Components } from "react-markdown"

const BASE_PATH = process.env.NODE_ENV === "production" ? "/StableViewpoints" : ""

const components: Components = {
  h1: ({ children }) => <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">{children}</h1>,
  h2: ({ children }) => <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">{children}</h2>,
  h3: ({ children }) => <h3 className="text-xl font-medium text-gray-800 mt-5 mb-2">{children}</h3>,
  h4: ({ children }) => <h4 className="text-lg font-medium text-gray-800 mt-4 mb-2">{children}</h4>,

  p: ({ children }) => <p className="text-gray-700 leading-relaxed mb-4">{children}</p>,
  strong: ({ children }) => <strong className="font-semibold text-gray-900">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,

  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-gray-700 space-y-1">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-gray-700 space-y-1">{children}</ol>,
  li: ({ children }) => <li className="mb-1">{children}</li>,

  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[#FFBF00] pl-4 italic text-gray-600 my-6 bg-yellow-50 py-2">
      {children}
    </blockquote>
  ),

  hr: () => <hr className="my-8 border-gray-300" />,

  // use the `inline` prop to distinguish block vs inline code
  code: ({ inline, className, children, ...props }: { inline?: boolean; className?: string; children?: React.ReactNode }) => {
    if (inline) {
      return <code className="bg-gray-100 px-1 py-0.5 rounded text-sm" {...props}>{children}</code>
    }
    return <code className={className}>{children}</code>
  },

  pre: ({ children }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">{children}</pre>
  ),

  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#228B22] hover:text-[#3E921E] underline">
      {children}
    </a>
  ),

  // no <div> wrapper — avoids invalid <p><div></div></p> nesting
  img: ({ src, alt }) => {
    const resolvedSrc = typeof src === "string" && src.startsWith("/") ? `${BASE_PATH}${src}` : src
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={resolvedSrc} alt={alt ?? ""} className="my-8 block rounded-lg w-full h-auto max-w-2xl mx-auto shadow-lg" />
  },
}

interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className="prose prose-lg max-w-none">
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  )
}