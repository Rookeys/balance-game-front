"use client"

import {
  useContinuePlayRoom,
  useGetGameDetails,
  useUpdatePlayRoom
} from "@/api/orval/client/game-play-controller/game-play-controller"
import { GamePlayRequest } from "@/api/orval/model/gamePlayRequest"
import { sleep } from "@/utils/sleep"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import SelectItemBox from "./SelectItemBox"
import { removePlayIdCookie } from "@/lib/cookies/playIdCookie"

interface Params {
  playId: number
}

export default function GamePlayPageClient({ playId }: Params) {
  const { id } = useParams()

  const router = useRouter()

  const { data: gameRoomData } = useGetGameDetails(Number(id))

  const { data: gamePlayData } = useContinuePlayRoom(Number(id), playId)

  const [selectedId, setSelectedId] = useState<string>()

  const { mutateAsync } = useUpdatePlayRoom()

  const returnPutGamePlayRequest = (selectedId: number): GamePlayRequest => {
    const winResourceId =
      gamePlayData?.leftResource?.resourceId === selectedId
        ? Number(gamePlayData?.leftResource?.resourceId)
        : Number(gamePlayData?.rightResource?.resourceId)

    const loseResourceId =
      gamePlayData?.leftResource?.resourceId === selectedId
        ? Number(gamePlayData?.rightResource?.resourceId)
        : Number(gamePlayData?.leftResource?.resourceId)

    return {
      winResourceId,
      loseResourceId
    } satisfies GamePlayRequest
  }

  const handleSelectItem = async (selectedResourceId: string) => {
    if (selectedId) return
    setSelectedId(selectedResourceId)
    await sleep(500)

    await mutateAsync({
      gameId: Number(id),
      playId: playId,
      data: returnPutGamePlayRequest(Number(selectedResourceId))
    })

    if (gamePlayData?.totalRoundNums === 2 && gamePlayData.currentRoundNums === 1) {
      // 결승전 선택 후 처리
      await removePlayIdCookie()
      if (selectedResourceId) {
        const query = new URLSearchParams({ resourceId: selectedResourceId }).toString()
        router.replace(`/game/${id}/results?${query}`)
        return
      }
    }
    // 게임 계속 진행
    window.location.reload()
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
