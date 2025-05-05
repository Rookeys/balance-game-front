"use client"

import { GameResultResponse } from "@/api/orval/model/gameResultResponse"
import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import { getThumbnailUrlByType } from "@/utils/getThumbnailUrlByType"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Params extends GameResultResponse {
  index: number
}

export default function DesktopResourceItem({ index, ...props }: Params) {
  const { id } = useParams()
  return (
    <Link href={`/game/${id}/resources/${props.resourceId}`} className={cn("flex h-[96px] overflow-hidden")}>
      <div className="flex w-[64px] flex-shrink-0 items-center justify-center text-label-bold text-label-normal">
        <p>{index + 1}</p>
      </div>
      <div className="center flex w-[112px] flex-shrink-0 items-center px-[16px]">
        <figure className="relative my-auto h-[64px] w-[80px] overflow-hidden rounded-[8px] border">
          <Image
            src={getThumbnailUrlByType({ type: props.type, url: props.content })}
            alt=""
            fill
            className="rounded-[8px] object-contain"
          />
        </figure>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <p className="line-clamp-1 text-body2-bold text-label-normal">{props.title}</p>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <div className="flex w-full flex-col gap-[4px]">
          <ProgressBar
            percent={Number(calculateWinRate(props.winningNums, props.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between">
            <p className="text-caption1-medium text-label-neutral">
              승률 {calculateWinRate(props.winningNums, props.totalPlayNums)}%
            </p>
            <p className='text-label-neutral" text-caption1-medium'>{props.winningNums}번 우승</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
