"use client"

import { useContinuePlayRoom, useUpdatePlayRoom } from "@/api/orval/client/game-play-controller/game-play-controller"
import { GamePlayRequest } from "@/api/orval/model/gamePlayRequest"
import { removePlayIdCookie } from "@/lib/cookies/playIdCookie"
import { sleep } from "@/utils/sleep"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"
import { useState } from "react"
import SelectItemBox from "./SelectItemBox"
interface Params {
  playId: number
}
export default function PlaySection({ playId }: Params) {
  const { id } = useParams()

  const router = useRouter()

  const { data: gamePlayData } = useContinuePlayRoom(Number(id), playId)

  const [selectedId, setSelectedId] = useState<number>()

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

  const handleSelectItem = async (selectedResourceId?: number) => {
    if (selectedId || !selectedResourceId) return
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
        router.replace(`/game/${id}/results/${selectedResourceId}`)
        return
      }
    }
    // 게임 계속 진행
    window.location.reload()
  }

  return (
    <article className="relative mb-[24px] mt-[40px] flex items-center justify-center gap-[16px] md:gap-[24px]">
      <SelectItemBox {...gamePlayData?.leftResource} selectedId={selectedId} handleSelectItem={handleSelectItem} />
      <figure className="pointer-events-none absolute start-[50%] top-[50%] z-[40] h-[44px] w-[44px] translate-x-[-50%] translate-y-[-50%] bg-white/50 md:h-[64px] md:w-[64px]">
        <Image fill src={"/images/vs.png"} alt="vs icon" className="object-contain" />
      </figure>
      <SelectItemBox {...gamePlayData?.rightResource} selectedId={selectedId} handleSelectItem={handleSelectItem} />
    </article>
  )
}
