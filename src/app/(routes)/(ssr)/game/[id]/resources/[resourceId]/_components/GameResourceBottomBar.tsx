"use client"

import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import { Share } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function GameResourceBottomBar() {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const played = searchParams.get("played")

  const router = useRouter()
  return (
    <BottomBarWrapper>
      <article className="flex items-center gap-[12px]">
        <button className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] border border-line-normal bg-background">
          <Share />
        </button>
        <Button type="button" className="h-full w-full" onClick={() => router.push(`/game/${id}`)}>
          {played ? "다시하기" : "플레이 하기"}
        </Button>
      </article>
    </BottomBarWrapper>
  )
}
