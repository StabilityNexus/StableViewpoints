interface MarkdownRendererProps {
  content: string
}

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  // Simple markdown to HTML conversion
  const renderMarkdown = (text: string) => {
    let html = text

    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3 class="text-xl font-medium text-gray-800 mt-5 mb-2">$1</h3>')
    html = html.replace(/^## (.*$)/gim, '<h2 class="text-2xl font-semibold text-gray-800 mt-6 mb-3">$1</h2>')
    html = html.replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">$1</h1>')

    // Bold and italic
    html = html.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    html = html.replace(/\*(.*?)\*/g, "<em>$1</em>")

    // Images
    html = html.replace(
      /!\[(.*?)\]\((.*?)\)/gim,
      '<div class="my-8"><img src="$2" alt="$1" class="rounded-lg w-full h-auto max-w-2xl mx-auto" /></div>',
    )

    // Links
    html = html.replace(
      /\[(.*?)\]\((.*?)\)/gim,
      '<a href="$2" class="text-[#228B22] hover:text-[#3E921E] underline">$1</a>',
    )

    // Blockquotes
    html = html.replace(
      /^> (.*$)/gim,
      '<blockquote class="border-l-4 border-[#FFBF00] pl-4 italic text-gray-600 my-6">$1</blockquote>',
    )

    // Lists - improved list handling
    const lines = html.split("\n")
    let inList = false
    const processedLines: string[] = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      const trimmed = line.trim()

      if (trimmed.startsWith("- ")) {
        if (!inList) {
          processedLines.push('<ul class="list-disc list-inside mb-4 text-gray-700">')
          inList = true
        }
        processedLines.push(`<li class="mb-1">${trimmed.substring(2)}</li>`)
      } else {
        if (inList) {
          processedLines.push("</ul>")
          inList = false
        }
        processedLines.push(line)
      }
    }

    if (inList) {
      processedLines.push("</ul>")
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
        trimmed.startsWith("<li") ||
        trimmed.startsWith("<div") ||
        trimmed.startsWith("<img")
      ) {
        return trimmed
      }
      return `<p class="text-gray-700 leading-relaxed mb-4">${trimmed}</p>`
    })

    return finalProcessedLines.join("\n")
  }

  return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }} />
}
