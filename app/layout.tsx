import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { getBaseUrl, getAbsoluteUrl, getOgImageUrl } from "@/lib/metadata"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const baseUrl = getBaseUrl()
const siteUrl = getAbsoluteUrl("")
const ogImage = getOgImageUrl("/stability-nexus-og.png")

export const metadata: Metadata = {
  title: {
    default: "Stable Viewpoints",
    template: "%s | Stable Viewpoints",
  },
  description: "An independent and decentralized publication focused on stability.",
  keywords: ["stablecoins", "blockchain", "cryptocurrency", "DeFi", "economic stability", "monetary systems", "AI governance"],
  authors: [{ name: "Stable Viewpoints" }],
  creator: "Stable Viewpoints",
  publisher: "Stable Viewpoints",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Stable Viewpoints",
    title: "Stable Viewpoints - Independent Articles about Stability",
    description: "An independent and decentralized publication focused on stability. Explore thoughtful perspectives on blockchain, cryptocurrencies, AI, DeFi, and economic stability.",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Stable Viewpoints - Independent Articles about Stability",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stable Viewpoints - Independent Articles about Stability",
    description: "An independent and decentralized publication focused on stability.",
    images: [ogImage],
    creator: "@StabilityNexus",
    site: "@StabilityNexus",
  },
  icons: {
    icon: '/images/favicon.ico',
    apple: '/images/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

/**
 * Root application layout that sets the HTML language, global fonts, and theme provider.
 *
 * @param children - The content to render inside the layout (application pages or components).
 * @returns A JSX element representing the root HTML document with configured fonts and a ThemeProvider wrapping `children`.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${playfair.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}