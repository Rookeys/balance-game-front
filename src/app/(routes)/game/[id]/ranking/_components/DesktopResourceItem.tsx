"use client"

import { GameResultResponse } from "@/api/orval/model/gameResultResponse"
import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import { getThumbnailUrlByType } from "@/utils/getThumbnailUrlByType"
import Image from "next/image"

interface Params extends GameResultResponse {
  index: number
}

export default function DesktopResourceItem({ index, ...props }: Params) {
  console.log(props.content)
  return (
    <div className={cn("flex h-[96px] overflow-hidden")}>
      <div className="flex w-[64px] flex-shrink-0 items-center justify-center">
        <p>{index + 1}</p>
      </div>
      <div className="center flex w-[112px] flex-shrink-0 items-center px-[16px]">
        <figure className="relative h-[64px] w-[80px]">
          <Image src={getThumbnailUrlByType({ type: props.type, url: props.content })} alt="" fill />
        </figure>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <p className="line-clamp-1">{props.title}</p>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <div className="flex w-full flex-col">
          <ProgressBar
            percent={Number(calculateWinRate(props.winningNums, props.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between">
            <p>{calculateWinRate(props.winningNums, props.totalPlayNums)}%</p>
            <p>{props.winningNums}번 우승</p>
          </div>
        </div>
      </div>
    </div>
  )
}
