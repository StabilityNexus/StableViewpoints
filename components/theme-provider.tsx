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

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
