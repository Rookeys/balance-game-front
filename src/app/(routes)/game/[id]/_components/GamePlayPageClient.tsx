"use client"

import { useContinuePlayRoom, useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import SelectItemBox from "./SelectItemBox"

interface Params {
  gameId: number
}

export default function GamePlayPageClient({ gameId }: Params) {
  const { id } = useParams()

  const { data: gameRoomData } = useGetGameDetails(Number(id))

  const { data: gamePlayData } = useContinuePlayRoom(Number(id), gameId)

  const [selectedId, setSelectedId] = useState<string>()

  const handleSelectItem = (id: string) => {
    if (selectedId) return
    setSelectedId(id)
  }

  return (
    <section className="flex flex-col">
      <article className="flex items-center justify-center">
        <p className="my-[8px] text-lg font-semibold">
          {gameRoomData?.title} {gamePlayData?.totalRoundNums}강 {gamePlayData?.currentRoundNums} /{" "}
          {gamePlayData?.totalRoundNums ? gamePlayData?.totalRoundNums / 2 : ""}
        </p>
      </article>
      <section className="flex min-h-[80vh] items-center justify-center">
        <SelectItemBox
          id={gamePlayData?.leftResource?.resourceId?.toString()}
          url={gamePlayData?.leftResource?.content}
          title={gamePlayData?.leftResource?.title}
          type={gamePlayData?.leftResource?.type}
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
        <div className="pointer-events-none absolute start-[50%] top-[50%] z-[40] translate-x-[-50%] translate-y-[-50%] bg-white/50">
          <Image width={80} height={80} src={"/images/vs.png"} alt="vs icon" className="object-contain" />
        </div>
        <SelectItemBox
          id={gamePlayData?.rightResource?.resourceId?.toString()}
          url={gamePlayData?.rightResource?.content}
          title={gamePlayData?.rightResource?.title}
          type={gamePlayData?.rightResource?.type}
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
      </section>
    </section>
  )
}
