"use client"
import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  title: string
  description: string
  selected?: boolean
  src: string
  onClick: () => void
}

export default function SelectButton({ title, description, selected, src, onClick }: Params) {
  return (
    <button
      type="button"
      className={cn(
        "w-full rounded-[12px] border border-line-normal p-[16px] text-start",
        selected && "border-primary-normal bg-primary-alternative"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px]">
        <Image src={src} alt={`${title}-icon`} width={24} height={24} />
        <div className="flex flex-col items-start gap-[8px]">
          <p className="text-label-bold md:text-body2-bold">{title}</p>
          <p className="text-caption1-regular md:text-label-regular">{description}</p>
        </div>
      </div>
    </button>
  )
}
