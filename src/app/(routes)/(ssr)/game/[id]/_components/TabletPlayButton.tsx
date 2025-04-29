"use client"
import { Button } from "@/components/Button"
import { Share } from "lucide-react"
import GamePlayTooltip from "./GamePlayTooltip"

interface Params {
  onClick?: () => void
}

export default function TabletPlayButton({ onClick }: Params) {
  return (
    <article className="hidden w-full max-w-[1200px] items-center gap-[12px] md:flex lg:hidden">
      <button className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[8px] border">
        <Share />
      </button>
      <Button data-tooltip-id="play-tooltip-tablet" type="button" className="h-full w-full" onClick={onClick}>
        플레이 하기
      </Button>
      <GamePlayTooltip id="play-tooltip-tablet" />
    </article>
  )
}
