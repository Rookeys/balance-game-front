"use client"
import { Button } from "@/components/Button"
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function GameCreateSuggestionCTA() {
  const { data: session } = useSession()
  return (
    <section className="flex w-full max-w-[1200px] flex-col items-center gap-[40px] bg-gray-30 py-[60px] md:py-[80px]">
      <article className="flex flex-col gap-[12px] text-center">
        <p className="text-[32px]">끌리는 이상형 월드컵을 발견하지 못하셨나요? 👀</p>
        <p>
          {session ? "이상형 월드컵을 직접 만들어 즐겨보세요." : "로그인하고 이상형 월드컵을 직접 만들어 즐겨보세요."}
        </p>
      </article>
      <article>
        <Button variant="custom" className="rounded-[100px] bg-black px-[48px] py-[12px] text-white" asChild>
          <Link href={session ? "/game-create/new" : "/sign-in"}>{session ? "만들러 가기" : "로그인하러 가기"}</Link>
        </Button>
      </article>
    </section>
  )
}
