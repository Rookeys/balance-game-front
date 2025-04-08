"use client"

import { cn } from "@/utils/cn"
import DesktopResourceItem from "./DesktopResourceItem"

export default function DesktopResources() {
  return (
    <article className="flex flex-col rounded-[16px] border px-[16px] py-[20px]">
      {/* Header */}
      <div className={cn("flex h-[74px] overflow-hidden rounded-[8px] bg-gray-10")}>
        <div className="flex w-[64px] flex-shrink-0 items-center justify-center">
          <p>순위</p>
        </div>
        <div className="center flex w-[112px] flex-shrink-0 items-center px-[16px]">
          <p>썸네일</p>
        </div>
        <div className="flex w-full items-center px-[16px]">
          <p>이름</p>
        </div>
        <div className="flex w-full items-center px-[16px]">
          <p>승률</p>
        </div>
      </div>
      {/* Contents */}
      <DesktopResourceItem />
      <DesktopResourceItem />
      <DesktopResourceItem />
    </article>
  )
}
