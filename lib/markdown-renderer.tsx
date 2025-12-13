interface MarkdownRendererProps {
  content: string
}

// Conditionally set BASE_PATH based on environment
const BASE_PATH = process.env.NODE_ENV === "production" ? "/StableViewpoints" : ""

/**
 * Render Markdown-like `content` as styled HTML inside a prose container.
 *
 * Supports headers, bold/italic emphasis, code blocks and inline code, images (root-relative `src` are prefixed with `BASE_PATH`), links, blockquotes, horizontal rules, ordered and unordered lists, and automatic paragraph wrapping.
 *
 * @param content - Markdown-like text to convert to HTML and render
 * @returns A React element containing the converted HTML (injected via `dangerouslySetInnerHTML`)
 */
export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Enhanced markdown to HTML conversion
  const renderMarkdown = (text: string) => {
    let html = text

    // Headers
    html = html.replace(
      /^### (.*$)/gim,
      '<h3 class="text-xl font-medium text-gray-800 dark:text-gray-100 mt-5 mb-2">$1</h3>',
    )
    html = html.replace(
      /^## (.*$)/gim,
      '<h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mt-6 mb-3">$1</h2>',
    )
    html = html.replace(
      /^# (.*$)/gim,
      '<h1 class="text-3xl font-bold text-white-900 dark:text-white mt-8 mb-4">$1</h1>',
    )

    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")

    // Code blocks
    html = html.replace(
      /```([\s\S]*?)```/g,
      '<pre class="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg overflow-x-auto my-4"><code class="text-sm text-gray-800 dark:text-gray-100">$1</code></pre>',
    )

    // Inline code
    html = html.replace(
      /`([^`]+)`/g,
      '<code class="bg-gray-100 dark:bg-slate-800 px-1 py-0.5 rounded text-sm text-gray-800 dark:text-gray-100">$1</code>',
    )

    // Images - handle base path for GitHub Pages
    html = html.replace(
      /!\[(.*?)\]\((.*?)\)/gim,
      (match, alt, src) => {
        // Add base path to image src if it starts with /
        const imageSrc = src.startsWith('/') ? `${BASE_PATH}${src}` : src
        return `<div class="my-8"><img src="${imageSrc}" alt="${alt}" class="rounded-lg w-full h-auto max-w-2xl mx-auto shadow-lg" /></div>`
      }
    )

    // Links
    html = html.replace(
      /\[(.*?)\]\((.*?)\)/gim,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-[#228B22] hover:text-[#3E921E] underline">$1</a>',
    )

    // Blockquotes
    html = html.replace(
      /^> (.*$)/gim,
      '<blockquote class="border-l-4 border-[#FFBF00] pl-4 italic text-gray-600 dark:text-gray-300 my-6 bg-yellow-50 dark:bg-slate-900/50 py-2">$1</blockquote>',
    )

    // Horizontal rules
    html = html.replace(/^---$/gm, '<hr class="my-8 border-gray-300" />')

    // Lists - improved list handling
    const lines = html.split("\n")
    let inList = false
    let inOrderedList = false
    const processedLines: string[] = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      if (trimmed.startsWith("- ")) {
        if (!inList) {
          processedLines.push('<ul class="list-disc list-inside mb-4 text-gray-700 dark:text-gray-200 space-y-1">')
          inList = true
        }
        processedLines.push(`<li class="mb-1">${trimmed.substring(2)}</li>`)
      } else if (trimmed.match(/^\d+\. /)) {
        if (!inOrderedList) {
          processedLines.push('<ol class="list-decimal list-inside mb-4 text-gray-700 dark:text-gray-200 space-y-1">')
          inOrderedList = true
        }
        processedLines.push(`<li class="mb-1">${trimmed.replace(/^\d+\. /, '')}</li>`)
      } else {
        if (inList) {
          processedLines.push("</ul>")
          inList = false
        }
        if (inOrderedList) {
          processedLines.push("</ol>")
          inOrderedList = false
        }
        processedLines.push(line)
      }
    }

    if (inList) {
      processedLines.push("</ul>")
    }
    if (inOrderedList) {
      processedLines.push("</ol>")
    }

    html = processedLines.join("\n")

    // Paragraphs
    const finalLines = html.split("\n")
    const finalProcessedLines = finalLines.map((line) => {
      const trimmed = line.trim()
      if (trimmed === "") return ""
      if (
        trimmed.startsWith("<h") ||
        trimmed.startsWith("<blockquote") ||
        trimmed.startsWith("<ul") ||
        trimmed.startsWith("</ul>") ||
        trimmed.startsWith("<ol") ||
        trimmed.startsWith("</ol>") ||
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<div") ||
        trimmed.startsWith("<img") ||
        trimmed.startsWith("<pre") ||
        trimmed.startsWith("<hr") ||
        trimmed.startsWith("<code")
      ) {
        return trimmed
      }
      return `<p class="text-gray-700 dark:text-gray-200 leading-relaxed mb-4">${trimmed}</p>`
    })

    return finalProcessedLines.join("\n")
  }

  return (
    <div
      className="prose prose-lg max-w-none dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  )
}