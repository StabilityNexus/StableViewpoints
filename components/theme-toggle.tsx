"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

/**
 * Render a button that toggles the application's color theme.
 *
 * The button toggles the theme when activated, exposes an accessible `aria-label` that describes the target mode, is disabled until the theme system is ready, and displays a Sun or Moon icon that reflects the current theme.
 *
 * @returns The button element that toggles the theme, with accessible labeling and an icon indicating the current theme
 */
export default function ThemeToggle() {
  const { theme, toggleTheme, isReady } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      disabled={!isReady}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#228B22]/30 bg-white/90 text-[#228B22] transition-all duration-300 hover:scale-105 hover:border-[#228B22]/60 hover:bg-[#228B22]/10 hover:text-[#228B22] disabled:opacity-60 dark:border-white/20 dark:bg-slate-800/70 dark:text-amber-200 dark:hover:bg-slate-700/60 dark:hover:text-white"
    >
      {isDark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </button>
  )
}