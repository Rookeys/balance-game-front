"use client"
import { useSessionStore } from "@/store/session"
import { SquarePlus } from "lucide-react"
import { signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"
import BlindToggle from "./BlindToggle"
import { Button } from "./Button"
import Logo from "./Logo"
import MoreButton, { MoreItem } from "./MoreButton"
import SignInModal from "./SignInModal"

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { data: session } = useSession()
  const clearSession = useSessionStore((state) => state.clearSession)

  const router = useRouter()

  const pathname = usePathname()

  const isMyPage = pathname === "/my-page"

  const moreItems: MoreItem[] = [
    ...(!isMyPage
      ? [
          {
            label: "마이페이지",
            onClick: () => router.push("/my-page")
          }
        ]
      : []),
    {
      label: "로그아웃",
      onClick: () => {
        clearSession()
        signOut({ callbackUrl: "/" })
      }
    }
  ]

  return (
    <header className="flex h-[64px] items-center justify-between border-b border-gray-200 bg-white px-[12px] py-[8px] dark:bg-gray-700">
      <section className="flex items-center gap-[40px]">
        <Link href={"/"} className="flex-shrink-0">
          <Logo />
        </Link>
        <Link
          className="text-body2-bold"
          href="https://kojaem.notion.site/1ebeadad956780d38264d49909eb9abf"
          aria-label="짱픽 서비스 소개 페이지로 이동"
          title="짱픽 서비스 소개"
        >
          서비스 소개
        </Link>
        <Link
          className="text-body2-bold"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdx46EPWF42ElyDv9rMmgfIz5lOJfNmpP3OjcTgK6hCSfmqyQ/viewform"
          aria-label="짱픽 문의하기 폼으로 이동"
          title="문의하기"
        >
          문의하기
        </Link>
      </section>
      <section className="flex items-center gap-[12px] md:gap-[20px]">
        {session && (
          <>
            <Button asChild className="hidden rounded-[8px] md:inline-flex">
              <Link href={"/game-create/new"} aria-label="game-create">
                월드컵 만들기
              </Link>
            </Button>
            <Link href={"/game-create/new"} className="block md:hidden" aria-label="game-create">
              <SquarePlus size={24} />
            </Link>
          </>
        )}
        {/* <ThemeToggle /> */}
        <BlindToggle />
        {session ? (
          <MoreButton
            items={moreItems}
            ButtonUI={
              <Image
                className="transition-color-custom h-[40px] w-[40px] rounded-full object-cover"
                src={session?.user.image || "/images/Rookeys.png"}
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
          <Button
            className="transition-color-custom rounded-[8px] bg-primary-normal text-label-bold text-white hover:bg-primary-hover"
            onClick={() => setIsOpen(true)}
          >
            로그인
          </Button>
        )}
      </section>
      {isOpen && <SignInModal onClose={() => setIsOpen(false)} />}
    </header>
  )
}
