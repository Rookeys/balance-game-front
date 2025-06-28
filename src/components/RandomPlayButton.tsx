"use client"
import { useGetRandomPlayRoomId } from "@/api/orval/client/game-play-controller/game-play-controller"
import { Button } from "@/components/Button"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { cn } from "@/utils/cn"
import { log } from "@/utils/log"
import { offset } from "@floating-ui/dom"
import Image from "next/image"
import { useState } from "react"
import { Tooltip } from "react-tooltip"

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
    <article className="fixed bottom-[24px] end-[24px] z-[20]">
      <Button
        variant="custom"
        className="rounded-full border bg-white p-[8px] text-black shadow-emphasize"
        onClick={handleClick}
        disabled={isLoading}
        data-tooltip-id="random-play-button"
      >
        <Image src="/images/icons/random.webp" alt="random" width={40} height={40} />
      </Button>
      <Tooltip
        id="random-play-button"
        className={cn("z-[20] !rounded-[8px] !bg-label-strong !px-[12px] !py-[8px]")}
        isOpen={true}
        defaultIsOpen
        place="top-end"
        middlewares={[offset(10)]}
      >
        <section className="flex items-center gap-[8px]">
          <p className="text-label-regular text-background">랜덤 월드컵 한 판 어때요?</p>
        </section>
      </Tooltip>
    </article>
  )
}
