"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Globe, Share2, Linkedin, Copy } from "lucide-react"
import { useMemo } from "react"
import { getAbsoluteUrl } from "@/lib/metadata"

interface Project {
  id: string
  name: string
  description: string
  logo?: string
  links: {
    website?: string
    github?: string
    twitter?: string
  }
}

// Temporary project data. In a real app, this could be fetched from an API or a JSON file.
const projects: Project[] = [
  {
    id: "stability-nexus",
    name: "Stability Nexus",
    description:
      "Research and publications on stability across AI, blockchain, and finance.",
    logo: "/StabilityNexus.svg",
    links: {
      website: "https://stability.nexus",
      github: "https://github.com/StabilityNexus",
      twitter: "https://x.com/StabilityNexus",
    },
  },
  {
    id: "stable-viewpoints",
    name: "Stable Viewpoints",
    description:
      "Digital publication focused on thoughtful perspectives about stability.",
    logo: "/stability-nexus-og.png",
    links: {
      website: "https://viewpoints.stability.nexus",
      github: "https://github.com/StabilityNexus/StableViewpoints",
      twitter: "https://x.com/StabilityNexus",
    },
  },
]

function ShareLinks({ project }: { project: Project }) {
  const shareTarget = project.links.website || project.links.github || getAbsoluteUrl("/projects")
  const shareText = encodeURIComponent(`${project.name}`)
  const encodedUrl = encodeURIComponent(shareTarget)

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareTarget)
      // Optional: You could integrate a toast here, but we'll keep it minimal and accessible.
      alert("Link copied to clipboard")
    } catch (e) {
      alert("Unable to copy link")
    }
  }

  return (
    <div className="flex items-center gap-2">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${project.name} on X/Twitter`}
        className="inline-flex p-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${project.name} on LinkedIn`}
        className="inline-flex p-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <Linkedin className="w-4 h-4" />
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Share ${project.name} on Facebook`}
        className="inline-flex p-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        {/* Using Share2 icon to represent Facebook share without adding another icon lib */}
        <Share2 className="w-4 h-4" />
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label={`Copy link to ${project.name}`}
        className="inline-flex p-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        <Copy className="w-4 h-4" />
      </button>
    </div>
  )
}

function ProjectCard({ project }: { project: Project }) {
  const logoSrc = useMemo(() => {
    if (!project.logo) return "/placeholder-logo.svg"
    return project.logo.startsWith("/") ? project.logo : project.logo
  }, [project.logo])

  return (
    <article className="flex flex-col h-full bg-white shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gradient-to-r from-[#228B22]/10 to-[#FFBF00]/10 relative rounded-lg">
      <div className="relative w-full p-6 flex items-center gap-4">
        <div className="flex-shrink-0">
          <Image
            src={logoSrc}
            alt={`${project.name} logo`}
            width={64}
            height={64}
            className="w-16 h-16 object-contain"
          />
        </div>
        <div className="flex-grow">
          <h2 className="text-xl font-bold text-gray-900 mb-1">{project.name}</h2>
          <p className="text-gray-600 text-sm">{project.description}</p>
        </div>
      </div>

      <div className="px-6 pb-6 mt-auto flex flex-col gap-4">
        {/* Primary links row */}
        <div className="flex flex-wrap items-center gap-3">
          {project.links.website && (
            <a
              href={project.links.website}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} website`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">Website</span>
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on GitHub`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          )}
          {project.links.twitter && (
            <a
              href={project.links.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} on X/Twitter`}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-md border bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <Twitter className="w-4 h-4" />
              <span className="text-sm">X/Twitter</span>
            </a>
          )}
        </div>

        {/* Share row */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">Share this project</span>
          <ShareLinks project={project} />
        </div>
      </div>
    </article>
  )
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-[#FFC517]/10">
      {/* Header */}
      <header className="border-b border-gradient-to-r from-[#228B22]/20 to-[#FFBF00]/20 bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-playfair bg-gradient-to-r from-[#228B22] via-[#5A981A] via-[#91A511] via-[#ADAC0D] via-[#E4B905] to-[#FFBF00] bg-clip-text text-transparent drop-shadow-sm leading-tight pb-2">
              Projects
            </h1>
            <p className="text-gray-600 mt-2 text-base">Explore our projects and organizations.</p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#228B22] to-[#91A511] hover:from-[#3E921E] hover:to-[#ADAC0D] text-white px-6 py-3 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Back to Articles
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </main>
    </div>
  )
}