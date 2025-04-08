"use client"

import ProgressBar from "@/components/ProgressBar"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import Image from "next/image"

export default function DesktopResourceItem() {
  return (
    <div className={cn("flex h-[96px] overflow-hidden")}>
      <div className="flex w-[64px] flex-shrink-0 items-center justify-center">
        <p>n</p>
      </div>
      <div className="center flex w-[112px] flex-shrink-0 items-center px-[16px]">
        <div className="relative h-[64px] w-[80px]">
          <Image src={"/images/Rookeys.png"} alt="" fill />
        </div>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <p className="line-clamp-1">리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름</p>
      </div>
      <div className="flex w-full items-center px-[16px]">
        <div className="flex w-full flex-col">
          <ProgressBar percent={Number(calculateWinRate(1, 20))} needIndicator={false} />
          <div className="flex items-center justify-between">
            <p>{calculateWinRate(1, 20)}%</p>
            <p>{1}번 우승</p>
          </div>
        </div>
      </div>
    </div>
  )
}
