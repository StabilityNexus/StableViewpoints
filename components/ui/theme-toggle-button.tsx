"use client"
import { MoonIcon, SunIcon } from "lucide-react"
import { useState } from "react"

function ThemeToggleButton() {
  const [dark, setDark] = useState<boolean>(true)
  function toggleTheme() {
    setDark(pre => !pre)
    document.querySelector('html')?.classList.toggle('dark')
  }


  return (
    <button
      onClick={toggleTheme}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={` border-2 outline-0 rounded-full border-zinc-300/80 bg-slate-50 dark:border-zinc-600 dark:bg-slate-800 p-1.5`}
    >
      {!dark ? (
        <MoonIcon className="text-zinc-400 size-5 " />
      ) : (
        <SunIcon className="text-zinc-600 size-5 " />
      )}
    </button>
  )
}

export default ThemeToggleButton
