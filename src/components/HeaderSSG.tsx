"use client"

import { useSessionStore } from "@/store/session"
import { SquarePlus } from "lucide-react"
import { Session } from "next-auth"
import { getSession, signOut } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import BlindToggle from "./BlindToggle"
import { Button } from "./Button"
import Logo from "./Logo"
import MoreButton, { MoreItem } from "./MoreButton"
import ThemeToggle from "./ThemeToggle"
import Skeleton from "./Skeleton"

export default function HeaderSSG() {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  const clearSession = useSessionStore((state) => state.clearSession)
  const router = useRouter()

  useEffect(() => {
    const fetchSession = async () => {
      const loginSession = await getSession()
      setSession(loginSession)
      setLoading(false)
    }

    fetchSession()
  }, [])

  const moreItems: MoreItem[] = [
    {
      label: "마이페이지",
      onClick: () => router.push("/my-page")
    },
    {
      label: "로그아웃",
      onClick: () => {
        clearSession()
        signOut({ callbackUrl: "/" })
      }
    }
  ]

  return (
    <header className="flex h-[64px] items-center justify-between border-b border-gray-200 bg-white px-[12px] py-[8px] dark:border-gray-700">
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
        {loading ? (
          <>
            <Skeleton className="hidden h-[40px] w-[140px] rounded-[100px] md:block" />
            <Skeleton className="rounded block h-[24px] w-[24px] md:hidden" />
            <Skeleton className="h-[40px] w-[40px] rounded-full" />
          </>
        ) : (
          <>
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
              <MoreButton
                items={moreItems}
                ButtonUI={
                  <Image
                    className="h-[40px] w-[40px] rounded-full object-cover"
                    src={session?.user?.image ?? "/images/Rookeys.png"}
                    alt="profile-image"
                    width={40}
                    height={40}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
                  />
                }
                className="top-[40px] w-[140px]"
              />
            ) : (
              <Button asChild className="rounded-[100px] bg-black text-white">
                <Link href={"/sign-in"} aria-label="sign-in">
                  로그인
                </Link>
              </Button>
            )}
          </>
        )}
      </section>
    </header>
  )
}
