"use client"

import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { Share } from "lucide-react"
import Image from "next/image"

export default function ResourceInformation() {
  return (
    <section className="flex w-full flex-col gap-[12px] md:flex-row md:gap-[24px]">
      <section className="relative aspect-[5/4] h-fit w-full flex-shrink-0 md:max-w-[50%] lg:max-w-[40%]">
        <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
      </section>
      <section className="flex w-full gap-[16px] md:flex-col md:gap-[24px] lg:gap-[40px]">
        <div className="relative h-[80px] w-[80px] flex-shrink-0 lg:h-[100px] lg:w-[100px]">
          <Image src={"/images/Rookeys.png"} fill alt="" />
        </div>
        <article className="flex w-full flex-col gap-[12px]">
          <p>리소스이름리소스이름리소스이름리소스이름</p>
          <div className="flex w-full flex-col">
            <ProgressBar percent={Number(calculateWinRate(1, 20))} needIndicator={false} />
            <div className="flex items-center justify-between">
              <p>{calculateWinRate(1, 20)}%</p>
              <p>{1}번 우승</p>
            </div>
          </div>
        </article>
        <article className="hidden gap-[12px] md:flex">
          <button className="flex-shrink-0 rounded-[8px] border p-[12px]">
            <Share />
          </button>
          <Button className="w-full bg-gray-10">다시하기</Button>
        </article>
      </section>
    </section>
  )
}
