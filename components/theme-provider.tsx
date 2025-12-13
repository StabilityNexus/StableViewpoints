"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
  isReady: boolean
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

/**
 * Provides theme state, persistence, and controls to descendant components via ThemeContext.
 *
 * Initializes the theme from localStorage (key "sv-theme") or the user's system preference, applies the "dark"
 * class to the document root when the active theme is "dark", and persists theme changes to localStorage.
 *
 * @param children - React nodes rendered inside the provider
 * @returns The ThemeContext provider element that supplies `{ theme, toggleTheme, setTheme, isReady }` to descendants
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light")
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("sv-theme") as Theme | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme: Theme = storedTheme ?? (prefersDark ? "dark" : "light")
    setThemeState(initialTheme)
    setIsReady(true)
  }, [])

  useEffect(() => {
    if (!isReady) return
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("sv-theme", theme)
  }, [theme, isReady])

  const setTheme = (value: Theme) => setThemeState(value)
  const toggleTheme = () => setThemeState((prev) => (prev === "dark" ? "light" : "dark"))

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        setTheme,
        isReady,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Accesses the current theme context value.
 *
 * @returns The current ThemeContextValue with `theme`, `toggleTheme`, `setTheme`, and `isReady`.
 * @throws Error if called outside of a `ThemeProvider`.
 */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}