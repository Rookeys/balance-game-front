"use client"
import { SquarePlus } from "lucide-react"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import BlindToggle from "./BlindToggle"
import { Button } from "./Button"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="flex h-[64px] items-center justify-between border-b border-gray-20 bg-light px-[12px] py-[8px] dark:border-gray-70 dark:bg-dark-night">
      <section className="flex items-center gap-[40px]">
        <Link href={"/"} className="flex-shrink-0">
          <Logo />
        </Link>
        <Link href={"/"} aria-label="About Our Service" className="hidden lg:block">
          서비스 소개
        </Link>
        <Link href={"/"} aria-label="Contact us" className="hidden lg:block">
          문의하기
        </Link>
      </section>
      <section className="flex items-center gap-[12px] md:gap-[20px]">
        {session && (
          <>
            <Button asChild className="hidden rounded-[100px] bg-black text-white md:inline-flex">
              <Link href={"/game-create/new"} aria-label="game-create">
                월드컵 만들기
              </Link>
            </Button>
            <Link href={"/game-create/new"} className="block md:hidden" aria-label="game-create">
              <SquarePlus size={24} />
            </Link>
          </>
        )}
        <ThemeToggle />
        <BlindToggle />
        {session ? (
          <Link href={"/my-page"} aria-label="my-page">
            <Image
              className="rounded-full object-contain"
              src={session?.user?.image ?? "/images/Rookeys.png"}
              alt="profile-image"
              width={40}
              height={40}
              placeholder="blur"
              blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
            />
          </Link>
        ) : (
          <Button asChild className="rounded-[100px] bg-black text-white">
            <Link href={"/sign-in"} aria-label="sign-in">
              로그인하기
            </Link>
          </Button>
        )}
      </section>
    </header>
  )
}
