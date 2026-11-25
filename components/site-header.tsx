import Image from "next/image"
import Link from "next/link"

type SiteHeaderProps = {
  actionHref?: string
  actionLabel?: string
  mobileActionLabel?: string
  contentWidth?: "max-w-4xl" | "max-w-6xl"
  homePage?: boolean
}

export default function SiteHeader({
  actionHref = "/submit",
  actionLabel = "Submit an Article",
  mobileActionLabel = "Submit",
  contentWidth = "max-w-6xl",
  homePage = false,
}: SiteHeaderProps) {
  const titleClassName =
    "text-lg min-[380px]:text-xl sm:text-3xl md:text-4xl font-bold leading-normal md:leading-[2.7rem] whitespace-nowrap font-playfair bg-gradient-to-r from-[#228B22] via-[#5A981A] via-[#91A511] via-[#ADAC0D] via-[#E4B905] to-[#FFBF00] bg-clip-text text-transparent"

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white shadow-sm">
      <div
        className={`${contentWidth} mx-auto flex items-center justify-between gap-3 px-3 py-3 sm:px-6 sm:py-5`}
      >
        <Link
          href="/"
          aria-label="Stable Viewpoints home"
          className="flex min-w-0 items-center gap-2 sm:gap-3"
        >
          <Image
            src="/stability-nexus-og.png"
            alt=""
            width={48}
            height={48}
            priority
            className="h-10 w-10 shrink-0 object-contain sm:h-[3.25rem] sm:w-[3.25rem] md:h-[3.75rem] md:w-[3.75rem]"
          />
          <div className="min-w-0">
            {homePage ? (
              <h1 className={titleClassName}>Stable Viewpoints</h1>
            ) : (
              <span className={titleClassName}>Stable Viewpoints</span>
            )}
            <p className="mt-1 hidden text-xs text-gray-600 sm:block md:text-base">
              Independent Articles about Stability
            </p>
          </div>
        </Link>

        <Link
          href={actionHref}
          className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-lg bg-gradient-to-r from-[#228B22] to-[#91A511] px-3 py-1.5 text-xs font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:from-[#3E921E] hover:to-[#ADAC0D] hover:shadow-xl sm:px-5 sm:py-2.5 sm:text-sm"
        >
          <span className="sm:hidden">{mobileActionLabel}</span>
          <span className="hidden sm:inline">{actionLabel}</span>
        </Link>
      </div>
    </header>
  )
}
