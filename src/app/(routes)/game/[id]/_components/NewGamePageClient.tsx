"use client"

import { useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import { useParams } from "next/navigation"
import SelectRoundModal from "./selectRoundModal"
import { useEffect, useState } from "react"

export default function NewGamePageClient() {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  // const [selectedId, setSelectedId] = useState<string>()

  const { data } = useGetGameDetails(Number(id))

  useEffect(() => {
    setIsOpen(true)
  }, [])

  // const handleSelectItem = (id: string) => {
  //   if (selectedId) return
  //   setSelectedId(id)
  // }

  return (
    <>
      {isOpen && (
        <SelectRoundModal
          title={data?.title}
          description={data?.description}
          totalItem={data?.totalResourceNums as number}
          setIsOpen={setIsOpen}
        />
      )}
    </>
  )
}
