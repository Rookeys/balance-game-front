"use client"

import { useContinuePlayRoom, useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import ProgressBar from "@/components/ProgressBar"
import { useParams } from "next/navigation"

interface Params {
  playId: number
}

export default function TitleSection({ playId }: Params) {
  const { id } = useParams()

  const { data: gameRoomData } = useGetGameDetails(Number(id))

  const { data: gamePlayData } = useContinuePlayRoom(Number(id), playId)

  // * gamePlayData?.totalRoundNum 는 "몇 강" 인지를 나타내는 값이므로 최소 2
  const matchCount = (gamePlayData?.totalRoundNums || 2) / 2

  return (
    <article className="flex flex-col items-center justify-center gap-[20px]">
      <p className="rounded-full bg-gray-100 px-[16px] py-[4px] md:px-[20px] md:py-[8px]">
        {gamePlayData?.currentRoundNums}/{matchCount}
      </p>
      <ProgressBar
        percent={((gamePlayData?.currentRoundNums || 1) / matchCount) * 100}
        className="md:max-w-[472px] lg:max-w-[792px]"
        needIndicator={false}
      />
      {gameRoomData?.title}
      {/* <p className="my-[8px] text-lg font-semibold">
            {gameRoomData?.title} {gamePlayData?.totalRoundNums}강 {gamePlayData?.currentRoundNums} /{" "}
            {gamePlayData?.totalRoundNums ? gamePlayData?.totalRoundNums : ""}
          </p> */}
    </article>
  )
}
