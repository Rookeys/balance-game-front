"use client"

import { useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import SelectRoundModal from "./selectRoundModal"

export default function NewGamePageClient() {
  const { id } = useParams()
  const [isOpenPlayModal, setIsOpenPlayModal] = useState<boolean>(false)

  const { data: gamePlayData } = useGetGameDetails(Number(id))

  useEffect(() => {
    setIsOpenPlayModal(true)
  }, [])

  return (
    <>
      {isOpenPlayModal && (
        <SelectRoundModal
          onClose={() => setIsOpenPlayModal(false)}
          totalItem={gamePlayData?.totalResourceNums as number}
        />
      )}
    </>
  )
}
