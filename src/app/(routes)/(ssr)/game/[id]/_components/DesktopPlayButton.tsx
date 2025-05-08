"use client"

import { Button } from "@/components/Button"
import { handleGameShare } from "@/utils/handleShare"
import { Share } from "lucide-react"
import GamePlayTooltip from "./GamePlayTooltip"

interface Params {
  title?: string
  id?: string | number
  onClick?: () => void
}

export default function DesktopPlayButton({ title, id, onClick }: Params) {
  return (
    <article className="hidden w-full max-w-[1200px] items-center gap-[12px] lg:flex">
      <button
        className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] border border-line-normal bg-background"
        onClick={() => handleGameShare({ title, id })}
      >
        <Share />
      </button>
      <Button data-tooltip-id="play-tooltip-desktop" type="button" className="h-full w-full" onClick={onClick}>
        플레이 하기
      </Button>
      <GamePlayTooltip id="play-tooltip-desktop" />
    </article>
  )
}
