"use client"

import { Gamepad2, UserRound } from "lucide-react"
import { useRouter } from "next/navigation"
import { Button } from "./Button"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const router = useRouter()

  return (
    <header className="flex justify-between items-center px-[12px] py-[8px] bg-light dark:bg-dark-night border-b border-gray-20 dark:border-gray-70">
      <section className="flex gap-[8px]">
        <Logo onClick={() => router.push("/")} aria-label="홈으로 가기" />
        <Button variant="custom" onClick={() => router.push("/game-create")} aria-label="game-create">
          <Gamepad2 size={40} />
        </Button>
      </section>
      <section className="flex gap-[8px]">
        <ThemeToggle />
        <Button variant="custom" onClick={() => router.push("/my-page")} aria-label="my-page">
          <UserRound size={40} />
        </Button>
      </section>
    </header>
  )
}
