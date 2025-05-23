"use client"

import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import { Share } from "lucide-react"
import GamePlayTooltip from "./GamePlayTooltip"

interface Params {
  onClick?: () => void
}

export default function GameDetailBottomBar({ onClick }: Params) {
  return (
    <BottomBarWrapper className="h-[80px]">
      <article className="flex items-center gap-[12px]">
        <button className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] border border-line-normal bg-background">
          <Share />
        </button>
        <Button data-tooltip-id="play-tooltip-mobile" type="button" className="h-full w-full" onClick={onClick}>
          플레이 하기
        </Button>
      </article>
      <GamePlayTooltip id="play-tooltip-mobile" />
    </BottomBarWrapper>
  )
}
