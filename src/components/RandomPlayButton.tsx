"use client"
import { useGetRandomPlayRoomId } from "@/api/orval/client/game-play-controller/game-play-controller"
import { Button } from "@/components/Button"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { log } from "@/utils/log"
import Image from "next/image"
import { useState } from "react"

export default function RandomPlayButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { refetch: trigger } = useGetRandomPlayRoomId({
    query: {
      enabled: false // 자동 요청 방지
    }
  })

  const asyncPush = useAsyncRoutePush()

  const handleClick = async () => {
    try {
      setIsLoading(true)
      const result = await trigger()
      const id = result.data
      await asyncPush(`/game/${id}`)
      setIsLoading(false)
    } catch (err) {
      log(err)
    }
  }

  return (
    <Button
      variant="custom"
      className="fixed bottom-[24px] end-[24px] z-[20] rounded-full border bg-white p-[8px] text-black shadow-emphasize"
      onClick={handleClick}
      disabled={isLoading}
    >
      <Image src="/images/icons/random.webp" alt="random" width={40} height={40} />
    </Button>
  )
}
