"use client"

import Link from "next/link"
import { ArrowLeft, PenLine } from "lucide-react"

interface NavbarProps {
  backHref?: string
  backLabel?: string
  ctaHref?: string
  ctaLabel?: string
}

export function Navbar({ backHref, backLabel, ctaHref = "/submit", ctaLabel = "Submit article" }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          {backHref && backLabel ? (
            <Link
              href={backHref}
              className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="whitespace-nowrap">{backLabel}</span>
            </Link>
          ) : null}

          <Link href="/" className="group flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#228B22] via-[#91A511] to-[#FFBF00] shadow-sm ring-1 ring-black/5">
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="text-xs font-semibold text-white">SV</span>
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-semibold text-gray-900">Stable Viewpoints</span>
              <span className="block text-xs text-gray-500">Independent articles on stability</span>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <nav className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-700">
            <Link className="rounded-lg px-3 py-2 transition-colors hover:bg-gray-100" href="/">
              Home
            </Link>
            <Link className="rounded-lg px-3 py-2 transition-colors hover:bg-gray-100" href="/submit">
              Submit
            </Link>
          </nav>
          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#228B22] to-[#91A511] px-4 py-2 text-sm font-semibold text-white shadow-lg ring-1 ring-black/5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:from-[#3E921E] hover:to-[#ADAC0D]"
            >
              <PenLine className="h-4 w-4" />
              <span>{ctaLabel}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  )
}

export default Navbar
