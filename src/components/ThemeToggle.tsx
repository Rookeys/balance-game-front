"use client"
import * as Toggle from "@radix-ui/react-toggle"
import { Moon, SunMedium } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Skeleton from "./Skeleton"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Skeleton className="rounded-full w-[40px] h-[40px]"></Skeleton>
  }

  return (
    <Toggle.Root
      onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=""
      aria-label="Theme Toggle"
    >
      <div
        className={`flex items-center justify-center w-[40px] h-[40px]
          rounded-full transition-all duration-300 ease-in-out border border-gray-20 dark:border-none dark:bg-dark-40
          ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
      >
        {theme === "dark" ? (
          <SunMedium className="text-yellow-70 transition-opacityduration-300 ease-in-out" size={20} />
        ) : (
          <Moon className="text-gray-30 transition-opacity duration-300 ease-in-out" size={20} />
        )}
      </div>
    </Toggle.Root>
  )
}
