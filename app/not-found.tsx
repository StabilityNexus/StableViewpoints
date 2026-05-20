"use client"

import Link from "next/link"
import Footer from "@/components/footer"
import { Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10 flex flex-col">
      {/* Header */}
      <header className="border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-center sm:text-left">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#5A981A] via-[#91A511] via-[#ADAC0D] via-[#E4B905] to-[#FFBF00] bg-clip-text text-transparent drop-shadow-sm leading-tight pb-2">
                Stable Viewpoints
              </h1>
            </Link>
            <p className="text-gray-600 mt-1 md:mt-2 text-sm md:text-lg">Independent Articles about Stability</p>
          </div>
          <Link
            href="/submit"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#228B22] to-[#91A511] hover:from-[#3E921E] hover:to-[#ADAC0D] text-white px-4 py-2 md:px-6 md:py-3 text-sm md:text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 whitespace-nowrap"
          >
            <span className="hidden sm:inline">Submit an Article</span>
            <span className="sm:hidden">Submit</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-lg mx-auto bg-white/60 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#228B22] via-[#91A511] to-[#FFBF00]" />
          
          <div className="space-y-2">
            <h2 className="text-8xl md:text-9xl font-bold font-playfair bg-gradient-to-r from-[#228B22] to-[#FFBF00] bg-clip-text text-transparent drop-shadow-sm">
              404
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Page Not Found
            </h3>
          </div>
          
          <p className="text-gray-600 text-lg">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved, renamed, or doesn&apos;t exist.
          </p>
          
          <div className="pt-6 flex justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 justify-center w-full sm:w-auto px-8 py-3 text-base font-bold text-white transition-all duration-300 bg-gradient-to-r from-[#228B22] to-[#91A511] hover:from-[#3E921E] hover:to-[#ADAC0D] rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#228B22] focus:ring-offset-2"
            >
              <Home className="w-5 h-5" />
              <span>Go to Homepage</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
