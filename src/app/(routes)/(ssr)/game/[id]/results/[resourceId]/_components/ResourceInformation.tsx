"use client"

import { useGetResource } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import ResourceItem from "@/components/ResourceItem"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { Share } from "lucide-react"
import Image from "next/image"
import { useParams, useSearchParams } from "next/navigation"

export default function ResourceInformation() {
  const { id, resourceId } = useParams()
  const searchParams = useSearchParams()

  const played = searchParams.get("played")

  const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  return (
    <section className="flex w-full flex-col gap-[12px] md:flex-row md:gap-[24px]">
      <figure className="relative aspect-[5/4] h-fit w-full flex-shrink-0 md:max-w-[50%] lg:max-w-[40%]">
        <ResourceItem {...resourceData} ratio={5 / 4} noDelay />
      </figure>
      <section className="flex w-full gap-[16px] md:flex-col md:gap-[24px] lg:gap-[40px]">
        <figure className="relative h-[80px] w-[80px] flex-shrink-0 lg:h-[100px] lg:w-[100px]">
          <Image src={"/images/Rookeys.png"} fill alt="" />
        </figure>
        <article className="flex w-full flex-col gap-[12px]">
          <p>{resourceData?.title}</p>
          <div className="flex w-full flex-col">
            <ProgressBar
              percent={Number(calculateWinRate(resourceData?.winningNums, resourceData?.totalPlayNums))}
              needIndicator={false}
            />
            <div className="flex items-center justify-between">
              <p>{calculateWinRate(resourceData?.winningNums, resourceData?.totalPlayNums)}%</p>
              <p>{resourceData?.winningNums}번 우승</p>
            </div>
          </div>
        </article>
        <article className="hidden gap-[12px] md:flex">
          <button className="flex-shrink-0 rounded-[8px] border p-[12px]">
            <Share />
          </button>
          <Button className="w-full bg-gray-100">{played ? "다시하기" : "플레이하기"}</Button>
        </article>
      </section>
    </section>
  )
}
