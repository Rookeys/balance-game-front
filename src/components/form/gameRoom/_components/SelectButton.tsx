"use client"
import { cn } from "@/utils/cn"
import { SquareDashed } from "lucide-react"

interface Params {
  title: string
  description: string
  selected?: boolean
  onClick: () => void
}

export default function SelectButton({ title, description, selected, onClick }: Params) {
  return (
    <button
      type="button"
      className={cn("w-full rounded-[12px] border p-[16px] text-start", selected && "bg-blue-100")}
      onClick={onClick}
    >
      <div className="flex items-center gap-[12px]">
        <SquareDashed />
        <div className="flex flex-col items-start gap-[8px]">
          <p>{title}</p>
          <p>{description}</p>
        </div>
      </div>
    </button>
  )
}
