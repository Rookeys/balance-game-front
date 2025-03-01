"use client"

import { useContinuePlayRoom } from "@/api/orval/client/game-play-controller/game-play-controller"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import SelectItemBox from "./SelectItemBox"

interface Params {
  gameId: number
}

export default function GamePlayPageClient({ gameId }: Params) {
  const { id } = useParams()

  const { data } = useContinuePlayRoom(Number(id), gameId)
  console.log("data", data)

  const [selectedId, setSelectedId] = useState<string>()

  const handleSelectItem = (id: string) => {
    if (selectedId) return
    setSelectedId(id)
  }

  return (
    <section className="flex flex-col">
      <article className="flex items-center justify-center">
        <p className="my-[8px] text-lg font-semibold">게임 타이틀 n강 라운드/전체라운드</p>
      </article>
      <section className="flex min-h-[80vh] items-center justify-center">
        <SelectItemBox
          id="image-id"
          url="https://avatars.githubusercontent.com/u/62785823?v=4"
          title="github"
          type="image"
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
        <div className="pointer-events-none absolute z-[40] h-fit w-fit bg-white/50">
          <Image width={80} height={80} src={"/images/vs.png"} alt="vs icon" className="object-contain" />
        </div>
        <SelectItemBox
          id="youtube-id"
          url="https://www.youtube.com/watch?v=W3qIzaNndH4"
          title="youtube"
          type="youtube"
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
      </section>
    </section>
  )
}
