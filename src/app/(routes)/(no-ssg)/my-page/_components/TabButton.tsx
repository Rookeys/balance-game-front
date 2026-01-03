"use client"
import { cn } from "@/utils/cn"

type TabButtonProps = {
  keyword: string
  current: string
  label: string
  onClick: () => void
}

export default function TabButton({ keyword, current, label, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full border-b-[2px] px-[8px] py-[16px]",
        current === keyword
          ? "border-black text-body2-bold text-label-normal"
          : "border-line-normal text-body2-medium text-label-neutral"
      )}
    >
      {label}
    </button>
  )
}
