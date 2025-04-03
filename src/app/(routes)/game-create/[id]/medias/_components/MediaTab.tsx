"use client"

import { cn } from "@/utils/cn"
import { usePathname } from "next/navigation"

export default function MediaTab() {
  const pathname = usePathname()
  return (
    <div className="flex items-center gap-[12px]">
      <button
        className={cn(
          "rounded-[100px] border border-red-10 px-[16px] py-[8px]",
          pathname.includes("medias") && "bg-gray-10"
        )}
      >
        업로드
      </button>
      <button
        className={cn(
          "rounded-[100px] border border-red-10 px-[16px] py-[8px]",
          pathname.includes("resources") && "bg-gray-10"
        )}
      >
        편집
      </button>
    </div>
  )
}
