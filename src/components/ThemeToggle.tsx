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
    return <Skeleton className="h-[40px] w-[40px] rounded-full" />
  }

  return (
    <Toggle.Root onPressedChange={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme Toggle">
      <div
        className={`flex h-[40px] w-[40px] items-center justify-center rounded-full border border-gray-400 transition-all duration-300 ease-in-out dark:border-none dark:bg-gray-400 ${theme === "dark" ? "rotate-180" : "rotate-0"}`}
      >
        {theme === "dark" ? (
          <SunMedium className="text-yellow-300 transition-opacity duration-300 ease-in-out" size={20} />
        ) : (
          <Moon className="text-gray-400 transition-opacity duration-300 ease-in-out" size={20} />
        )}
      </div>
    </Toggle.Root>
  )
}
