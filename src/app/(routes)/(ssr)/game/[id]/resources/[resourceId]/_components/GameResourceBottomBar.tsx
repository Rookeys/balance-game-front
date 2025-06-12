"use client"

import { useGetResource } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import BottomBarWrapper from "@/components/BottomBarWrapper"
import { Button } from "@/components/Button"
import { handleResourceShare } from "@/utils/handleShare"
import { Share } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function GameResourceBottomBar() {
  const { id, resourceId } = useParams()
  const searchParams = useSearchParams()
  const { data: resourceData } = useGetResource(Number(id), Number(resourceId))
  const played = searchParams.get("played")

  const router = useRouter()
  return (
    <BottomBarWrapper className="h-[80px]">
      <article className="flex items-center gap-[12px]">
        <button
          className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[12px] border border-line-normal bg-background"
          onClick={() =>
            handleResourceShare({ title: resourceData?.title, id: id as string, resourceId: resourceId as string })
          }
        >
          <Share />
        </button>
        <Button type="button" className="h-full w-full" onClick={() => router.push(`/game/${id}`)}>
          {played ? "다시하기" : "플레이 하기"}
        </Button>
      </article>
    </BottomBarWrapper>
  )
}
