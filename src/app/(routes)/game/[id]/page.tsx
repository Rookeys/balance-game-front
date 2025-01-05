"use client"
import ImageRatio from "@/components/ImageRatio"
import YoutubeRatio from "@/components/YoutubeRatio"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import Image from "next/image"
import { useEffect, useState } from "react"
import SelectRoundModal from "./_components/selectRoundModal"

export default function Game() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const windowWidth = useResizeHandler()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <section className="flex items-center justify-center min-h-[100vh]">
      {isOpen && (
        <SelectRoundModal title="게임 타이틀" description="게임 디스크립션" totalItem={200} setIsOpen={setIsOpen} />
      )}
      <div className="relative w-[50vw]">
        <ImageRatio src="https://avatars.githubusercontent.com/u/62785823?v=4" alt="thumbnail" ratio={1} fill />
      </div>
      <div className="absolute bg-white/50 z-[40] w-fit h-fit">
        <Image width={80} height={80} src={"/images/vs.png"} alt="vs icon" className="object-contain" />
      </div>
      <div className="relative w-[50vw]">
        <YoutubeRatio
          url="https://www.youtube.com/watch?v=W3qIzaNndH4"
          ratio={windowWidth > parseInt(SCREEN_SIZE.md) ? 16 / 9 : 1}
        />
      </div>
    </section>
  )
}
