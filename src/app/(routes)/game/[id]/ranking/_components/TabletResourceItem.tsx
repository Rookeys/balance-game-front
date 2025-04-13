"use client"

import { GameResultResponse } from "@/api/orval/model/gameResultResponse"
import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { getThumbnailUrlByType } from "@/utils/getThumbnailUrlByType"
import Image from "next/image"

interface Params extends GameResultResponse {
  index: number
}

export default function TabletResourceItem({ index, ...props }: Params) {
  return (
    <section className="flex items-center gap-[12px] py-[16px]">
      <article className="flex h-full items-center">
        <p className="flex h-full items-center justify-center p-[8px] sm:p-[16px] md:w-[56px]">{index + 1}</p>
        <figure className="relative my-auto h-[100px] w-[120px]">
          <Image
            src={getThumbnailUrlByType({ type: props.type, url: props.content }) ?? "/images/Rookeys.png"}
            fill
            alt="thumbnail"
            className="rounded-[8px]"
          />
        </figure>
      </article>
      <article className="flex w-full flex-col gap-[12px]">
        {/* \u00A0 = 공백 */}
        {/* <p className="line-clamp-2">{"리소스 이름" || "\u00A0"}</p> */}
        <p className="line-clamp-2">{props.title}</p>
        <div className="flex flex-col">
          <ProgressBar
            percent={Number(calculateWinRate(props.winningNums, props.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between">
            <p>{calculateWinRate(props.winningNums, props.totalPlayNums)}%</p>
            <p>{props.winningNums}번 우승</p>
          </div>
        </div>
      </article>
    </section>
  )
}
