import { Gamepad2, UserRound } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  return (
    <header className="flex items-center justify-between border-b border-gray-20 bg-light px-[12px] py-[8px] dark:border-gray-70 dark:bg-dark-night">
      <section className="flex gap-[8px]">
        <Link href={"/"}>
          <Logo />
        </Link>
        <Link href={"/game-create/new"} aria-label="game-create">
          <Gamepad2 size={40} />
        </Link>
      </section>
      <section className="flex gap-[8px]">
        <ThemeToggle />
        <Link href={"/my-page"} aria-label="my-page">
          <UserRound size={40} />
        </Link>
      </section>
    </header>
  )
}
