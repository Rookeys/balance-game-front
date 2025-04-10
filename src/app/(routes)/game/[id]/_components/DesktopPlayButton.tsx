"use client"
import { Button } from "@/components/Button"
import { Share } from "lucide-react"

export default function DesktopPlayButton() {
  return (
    <article className="hidden w-full max-w-[1200px] items-center gap-[12px] lg:flex">
      <button className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] border">
        <Share />
      </button>
      <Button type="button" className="h-full w-full bg-black text-white">
        플레이 하기
      </Button>
    </article>
  )
}
