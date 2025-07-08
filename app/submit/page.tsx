import Link from "next/link"
import { ArrowLeft, Upload, FileText, ImageIcon, CheckCircle, Users, MessageCircle } from "lucide-react"
import Footer from "@/components/footer"

export const metadata = {
  title: "Submit an Article | Stable Viewpoints",
  description:
    "Learn how to submit your article to Stable Viewpoints and contribute to thoughtful dialogue about stability.",
}

export default function SubmitPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10">
      {/* Header */}
      <header className="border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="inline-flex items-center text-[#228B22] hover:text-[#3E921E] transition-colors font-semibold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Stable Viewpoints
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white shadow-xl overflow-hidden border border-gradient-to-r from-[#228B22]/10 to-[#FFBF00]/10">
          <div className="p-8 md:p-12">
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#91A511] to-[#E4B905] bg-clip-text text-transparent mb-6 leading-tight pb-2">
              Submit an Article
            </h1>

            <p className="text-gray-700 mb-8 leading-relaxed">
              Stable Viewpoints is a digital publication focused on thoughtful perspectives about stability in our
              rapidly changing world. We explore how emerging technologies can be used to bring greater stability to the
              world. Our mission is to provide well-researched, balanced viewpoints on issues that matter for creating a
              more stable future.
            </p>

            {/* Topics We Cover */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <FileText className="w-8 h-8 text-[#228B22]" />
                Topics We Cover
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-[#228B22]/5 to-[#91A511]/5 p-4 rounded-lg border border-[#228B22]/10">
                  <h3 className="font-semibold text-[#228B22] mb-2">Blockchain & Cryptocurrencies</h3>
                  <p className="text-gray-600 text-sm">
                    Digital assets, blockchain technology, cryptocurrency adoption, regulatory frameworks
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#91A511]/5 to-[#ADAC0D]/5 p-4 rounded-lg border border-[#91A511]/10">
                  <h3 className="font-semibold text-[#91A511] mb-2">Artificial Intelligence</h3>
                  <p className="text-gray-600 text-sm">
                    AI governance, machine learning applications, ethical AI development, automation impact
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#ADAC0D]/5 to-[#C8B209]/5 p-4 rounded-lg border border-[#ADAC0D]/10">
                  <h3 className="font-semibold text-[#ADAC0D] mb-2">Economic & Financial Stability</h3>
                  <p className="text-gray-600 text-sm">
                    Monetary policy, financial markets, economic resilience, inflation dynamics
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#C8B209]/5 to-[#E4B905]/5 p-4 rounded-lg border border-[#C8B209]/10">
                  <h3 className="font-semibold text-[#C8B209] mb-2">Decentralized Finance (DeFi)</h3>
                  <p className="text-gray-600 text-sm">
                    Protocol analysis, yield farming, liquidity provision, DeFi security
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#E4B905]/5 to-[#FFBF00]/5 p-4 rounded-lg border border-[#E4B905]/10">
                  <h3 className="font-semibold text-[#E4B905] mb-2">Technology & Society</h3>
                  <p className="text-gray-600 text-sm">
                    Digital transformation, cybersecurity, privacy rights, technological disruption
                  </p>
                </div>
                <div className="bg-gradient-to-r from-[#FFBF00]/5 to-[#FFC517]/5 p-4 rounded-lg border border-[#FFBF00]/10">
                  <h3 className="font-semibold text-[#FFBF00] mb-2">Monetary Systems</h3>
                  <p className="text-gray-600 text-sm">
                    Central bank digital currencies (CBDCs), stablecoins, alternative monetary frameworks
                  </p>
                </div>
              </div>
            </section>

            {/* How to Submit */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Submit an Article</h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                We welcome contributions from writers, researchers, and experts who share our commitment to thoughtful,
                well-researched content. Here's how to submit your article:
              </p>

              {/* Step 1 */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[#228B22]/5 to-[#91A511]/5 rounded-lg border border-[#228B22]/10">
                <h3 className="text-2xl font-semibold text-[#228B22] mb-4 flex items-center gap-3">
                  <span className="bg-[#228B22] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                    1
                  </span>
                  Prepare Your Article
                </h3>
                <p className="text-gray-700 mb-4">
                  Your article should be written in Markdown format (.md file) and include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>
                    <strong>Title</strong>: Clear and descriptive
                  </li>
                  <li>
                    <strong>Author</strong>: Your name or preferred byline
                  </li>
                  <li>
                    <strong>Date</strong>: Publication date (YYYY-MM-DD format)
                  </li>
                  <li>
                    <strong>Image</strong>: A relevant header image (we can help source one if needed)
                  </li>
                  <li>
                    <strong>Excerpt</strong>: A brief 1-2 sentence summary
                  </li>
                  <li>
                    <strong>Content</strong>: Well-researched, original content (500-2000 words recommended)
                  </li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[#91A511]/5 to-[#ADAC0D]/5 rounded-lg border border-[#91A511]/10">
                <h3 className="text-2xl font-semibold text-[#91A511] mb-4 flex items-center gap-3">
                  <span className="bg-[#91A511] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                    2
                  </span>
                  Format Your Article
                </h3>
                <p className="text-gray-700 mb-4">Create a file with this structure:</p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">{`---
title: "Your Article Title Here"
author: "Your Name"
date: "2024-01-25"
image: "/images/your-image.jpg"
excerpt: "A brief description of your article that will appear on the homepage."
---

# Your Article Title Here

Your article content goes here. You can use:

- **Bold text** and *italic text*
- Lists and bullet points
- Links to [external sources](https://example.com)
- Images: ![Alt text](/images/image-name.jpg)
- Quotes and other markdown formatting

## Subheadings

Break up your content with clear subheadings to improve readability.

Remember to cite your sources and provide value to our readers!`}</pre>
                </div>
              </div>

              {/* Step 3 */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[#ADAC0D]/5 to-[#C8B209]/5 rounded-lg border border-[#ADAC0D]/10">
                <h3 className="text-2xl font-semibold text-[#ADAC0D] mb-4 flex items-center gap-3">
                  <span className="bg-[#ADAC0D] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                    3
                  </span>
                  Submit via GitHub (No Experience Required!)
                </h3>
                <p className="text-gray-700 mb-4">
                  Don't worry if you're new to GitHub - here's a simple step-by-step guide:
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Go to our repository</p>
                      <p className="text-gray-600">
                        Visit{" "}
                        <Link
                          href="https://github.com/your-username/stable-viewpoints-blog"
                          className="text-[#228B22] hover:underline"
                        >
                          github.com/your-username/stable-viewpoints-blog
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Fork the repository</p>
                      <p className="text-gray-600">
                        Click the "Fork" button in the top-right corner. This creates your own copy of the project.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Add your images</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>
                          In your forked repository, click on <code className="bg-gray-100 px-1 rounded">public</code>{" "}
                          folder
                        </li>
                        <li>
                          Then click on <code className="bg-gray-100 px-1 rounded">images</code> folder
                        </li>
                        <li>Click "Add file" → "Upload files"</li>
                        <li>Drag and drop your images or click "choose your files"</li>
                        <li>
                          <strong>Image requirements</strong>: JPG, PNG, or WebP format, under 2MB each
                        </li>
                        <li>
                          <strong>Naming</strong>: Use descriptive names with hyphens (e.g.,{" "}
                          <code className="bg-gray-100 px-1 rounded">bitcoin-price-chart.jpg</code>)
                        </li>
                        <li>Commit the images with a message like "Add images for [article title]"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      4
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Add your article</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>
                          Navigate to <code className="bg-gray-100 px-1 rounded">content</code> →{" "}
                          <code className="bg-gray-100 px-1 rounded">articles</code> folder
                        </li>
                        <li>Click "Add file" → "Create new file"</li>
                        <li>
                          Name your file: <code className="bg-gray-100 px-1 rounded">your-article-title.md</code> (use
                          hyphens instead of spaces)
                        </li>
                        <li>Paste your article content in the editor</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      5
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Use images in your article</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>
                          <strong>Header image</strong>: Set in the frontmatter as{" "}
                          <code className="bg-gray-100 px-1 rounded">image: "/images/your-header-image.jpg"</code>
                        </li>
                        <li>
                          <strong>Inline images</strong>: Use markdown syntax{" "}
                          <code className="bg-gray-100 px-1 rounded">![Description](/images/your-image.jpg)</code>
                        </li>
                        <li>
                          <strong>Image paths</strong>: Always start with{" "}
                          <code className="bg-gray-100 px-1 rounded">/images/</code> (e.g.,{" "}
                          <code className="bg-gray-100 px-1 rounded">/images/defi-protocol-diagram.png</code>)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      6
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Commit your changes</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>Scroll down to "Commit new file"</li>
                        <li>Add a commit message like "Add article: Your Article Title"</li>
                        <li>Click "Commit new file"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      7
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Add your article to the index</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>
                          Navigate to <code className="bg-gray-100 px-1 rounded">public</code> →{" "}
                          <code className="bg-gray-100 px-1 rounded">articles</code> folder
                        </li>
                        <li>
                          Click on <code className="bg-gray-100 px-1 rounded">articles-index.json</code>
                        </li>
                        <li>Click the pencil icon to edit the file</li>
                        <li>
                          Add your article information to the <code className="bg-gray-100 px-1 rounded">articles</code>{" "}
                          array at the top (it will appear first on the website)
                        </li>
                        <li>
                          <strong>Use this format</strong>:
                        </li>
                      </ul>
                      <div className="bg-gray-900 text-gray-100 p-3 rounded-lg overflow-x-auto mt-2 text-sm">
                        <pre>{`{
  "slug": "your-article-title",
  "title": "Your Article Title Here", 
  "author": "Your Name",
  "date": "2024-01-25",
  "image": "/images/your-header-image.jpg",
  "excerpt": "A brief description of your article that will appear on the homepage.",
  "featured": false
}`}</pre>
                      </div>
                      <ul className="text-gray-600 list-disc list-inside mt-2 space-y-1">
                        <li>
                          <strong>Important</strong>: Add a comma after the previous entry and ensure proper JSON
                          formatting
                        </li>
                        <li>
                          <strong>Featured articles</strong>: Set{" "}
                          <code className="bg-gray-100 px-1 rounded">"featured": true</code> if you want your article
                          highlighted with a star (ask us first)
                        </li>
                        <li>Commit the changes with a message like "Add [article title] to index"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="bg-[#ADAC0D] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mt-1">
                      8
                    </span>
                    <div>
                      <p className="font-medium text-gray-800">Create a Pull Request</p>
                      <ul className="text-gray-600 list-disc list-inside mt-1 space-y-1">
                        <li>You'll see a banner saying "This branch is ahead"</li>
                        <li>Click "Contribute" → "Open pull request"</li>
                        <li>Add a title and description for your submission</li>
                        <li>
                          <strong>Include</strong>: List of images you've added and their purpose
                        </li>
                        <li>Click "Create pull request"</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="mb-8 p-6 bg-gradient-to-r from-[#C8B209]/5 to-[#E4B905]/5 rounded-lg border border-[#C8B209]/10">
                <h3 className="text-2xl font-semibold text-[#C8B209] mb-4 flex items-center gap-3">
                  <span className="bg-[#C8B209] text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold">
                    4
                  </span>
                  Review Process
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#228B22]" />
                    <span className="text-gray-700">
                      <strong>Initial Review</strong>: We'll review your submission as soon as possible
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-[#91A511]" />
                    <span className="text-gray-700">
                      <strong>Feedback</strong>: If changes are needed, we'll provide constructive feedback
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Upload className="w-5 h-5 text-[#E4B905]" />
                    <span className="text-gray-700">
                      <strong>Publication</strong>: Once approved, your article will be published on the site
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-[#FFBF00]" />
                    <span className="text-gray-700">
                      <strong>Promotion</strong>: We'll share your article on our social media channels
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Image Guidelines */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <ImageIcon className="w-8 h-8 text-[#228B22]" />
                Image Guidelines
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#228B22]/5 to-[#91A511]/5 p-6 rounded-lg border border-[#228B22]/10">
                  <h3 className="text-xl font-semibold text-[#228B22] mb-4">Technical Requirements</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Formats</strong>: JPG, PNG, or WebP
                    </li>
                    <li>
                      <strong>Size</strong>: Maximum 2MB per image
                    </li>
                    <li>
                      <strong>Dimensions</strong>: Minimum 800px width for header images
                    </li>
                    <li>
                      <strong>Quality</strong>: High resolution, clear and professional
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#91A511]/5 to-[#ADAC0D]/5 p-6 rounded-lg border border-[#91A511]/10">
                  <h3 className="text-xl font-semibold text-[#91A511] mb-4">Content Guidelines</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Copyright</strong>: Only use images you own or have permission to use
                    </li>
                    <li>
                      <strong>Relevance</strong>: Images should directly relate to your article content
                    </li>
                    <li>
                      <strong>Attribution</strong>: Include image credits in your article if required
                    </li>
                    <li>
                      <strong>Accessibility</strong>: Use descriptive alt text for all images
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-[#ADAC0D]/5 to-[#C8B209]/5 rounded-lg border border-[#ADAC0D]/10">
                <h3 className="text-xl font-semibold text-[#ADAC0D] mb-4">Naming Convention</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>Use descriptive, lowercase names with hyphens</li>
                  <li>
                    <strong>Examples</strong>:{" "}
                    <code className="bg-gray-100 px-1 rounded">blockchain-network-diagram.jpg</code>,{" "}
                    <code className="bg-gray-100 px-1 rounded">defi-yield-comparison.png</code>
                  </li>
                  <li>
                    Avoid spaces, special characters, or generic names like{" "}
                    <code className="bg-gray-100 px-1 rounded">image1.jpg</code>
                  </li>
                </ul>
              </div>
            </section>

            {/* Submission Guidelines */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Submission Guidelines</h2>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-r from-[#E4B905]/5 to-[#FFBF00]/5 p-6 rounded-lg border border-[#E4B905]/10">
                  <h3 className="text-xl font-semibold text-[#E4B905] mb-4">Content Standards</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Original work only</strong> - no plagiarism or previously published content
                    </li>
                    <li>
                      <strong>Well-researched</strong> - include credible sources and citations
                    </li>
                    <li>
                      <strong>Balanced perspective</strong> - present multiple viewpoints when appropriate
                    </li>
                    <li>
                      <strong>Constructive tone</strong> - focus on solutions and positive change
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-[#FFBF00]/5 to-[#FFC517]/5 p-6 rounded-lg border border-[#FFBF00]/10">
                  <h3 className="text-xl font-semibold text-[#FFBF00] mb-4">Technical Requirements</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>
                      <strong>Markdown format</strong> (.md file)
                    </li>
                    <li>
                      <strong>Images</strong>: High-quality, royalty-free images
                    </li>
                    <li>
                      <strong>Length</strong>: 500-2000 words
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Questions?</h2>
              <p className="text-gray-700 mb-6">
                If you have questions about the submission process or want to discuss a potential article idea, contact
                us via:
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://t.me/StabilityNexus"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#228B22] to-[#5A981A] hover:from-[#3E921E] hover:to-[#91A511] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" />
                  Telegram
                </Link>
                <Link
                  href="https://discord.gg/fuuWX4AbJt"
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#91A511] to-[#ADAC0D] hover:from-[#ADAC0D] hover:to-[#C8B209] text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Users className="w-5 h-5" />
                  Discord
                </Link>
              </div>
            </section>

            {/* Footer Message */}
            <div className="border-t border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 pt-8">
              <p className="text-gray-600 italic text-center">
                Stable Viewpoints is committed to fostering thoughtful dialogue about the challenges and opportunities
                of our time. We believe that through careful analysis and open discussion, we can work together toward a
                more stable future.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
