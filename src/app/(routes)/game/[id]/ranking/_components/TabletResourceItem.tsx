"use client"

import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import Image from "next/image"

export default function TabletResourceItem() {
  return (
    <section className="flex items-center gap-[12px] py-[16px]">
      <article className="flex h-full items-center">
        <p className="flex h-full items-center justify-center p-[8px] sm:p-[16px] md:w-[56px]">n</p>
        <div className="relative my-auto h-[100px] w-[120px]">
          <Image src={"/images/Rookeys.png"} fill alt="thumbnail" className="rounded-[8px]" />
        </div>
      </article>
      <article className="flex w-full flex-col gap-[12px]">
        {/* <p className="line-clamp-2">{"리소스 이름" || "\u00A0"}</p> */}
        <p className="line-clamp-2">리소스 이름</p>
        <div className="flex flex-col">
          <ProgressBar percent={Number(calculateWinRate(1, 10))} needIndicator={false} />
          <div className="flex items-center justify-between">
            <p>{calculateWinRate(1, 10)}%</p>
            <p>{1}번 우승</p>
          </div>
        </div>
      </article>
    </section>
  )
}
