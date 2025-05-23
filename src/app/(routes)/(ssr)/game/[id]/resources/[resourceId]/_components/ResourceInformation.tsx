"use client"

import { useGetResource } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import ResourceItem from "@/components/ResourceItem"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { handleGameShare } from "@/utils/handleShare"
import { Share } from "lucide-react"
import Image from "next/image"
import { useParams, useRouter, useSearchParams } from "next/navigation"

export default function ResourceInformation() {
  const { id, resourceId } = useParams()
  const searchParams = useSearchParams()

  const router = useRouter()

  const played = searchParams.get("played")

  const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  return (
    <section className="mx-[-16px] flex w-[100vw] flex-col gap-[16px] bg-fill-normal px-[16px] py-[40px] md:mx-0 md:w-full md:flex-row md:gap-[24px] md:rounded-[16px] md:px-[24px]">
      <figure className="relative aspect-[5/4] h-fit w-full p-[2px] border-animation">
        <ResourceItem
          {...resourceData}
          start={resourceData?.startSec}
          end={resourceData?.endSec}
          ratio={5 / 4}
          noDelay
        />
      </figure>
      <section className="flex w-full gap-[16px] md:flex-col md:gap-[24px] lg:gap-[40px]">
        <figure className="relative h-[80px] w-[80px] flex-shrink-0 lg:h-[100px] lg:w-[100px]">
          <Image src={"/images/icons/medal.webp"} fill alt="medal" />
        </figure>
        <article className="flex w-full flex-col gap-[12px]">
          <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">{resourceData?.title}</p>
          <div className="flex w-full flex-col">
            <ProgressBar
              percent={Number(calculateWinRate(resourceData?.winningNums, resourceData?.totalPlayNums))}
              needIndicator={false}
            />
            <div className="flex items-center justify-between">
              <p className="text-label-medium">
                승률 {calculateWinRate(resourceData?.winningNums, resourceData?.totalPlayNums)}%
              </p>
              <p className="text-label-medium">{resourceData?.winningNums}번 우승</p>
            </div>
          </div>
        </article>
        <article className="hidden gap-[12px] md:flex">
          <button
            className="flex-shrink-0 rounded-[12px] border border-line-normal bg-background p-[12px]"
            onClick={() => handleGameShare({ title: resourceData?.title, id: id as string })}
          >
            <Share />
          </button>
          <Button className="w-full" onClick={() => router.push(`/game/${id}`)}>
            {played ? "다시하기" : "플레이하기"}
          </Button>
        </article>
      </section>
    </section>
  )
}
