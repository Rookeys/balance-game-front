"use client"

import { Button } from "@/components/Button"
import { useClickOutside } from "@/hooks/useClickOutside"
import { cn } from "@/utils/cn"
import { EllipsisVertical } from "lucide-react"
import { ReactNode, useRef, useState } from "react"

export interface MoreItem {
  label: string
  onClick: () => void
}

interface Params {
  items: MoreItem[]
  ButtonUI?: ReactNode
  className?: string
}

export default function MoreButton({ items, ButtonUI, className }: Params) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useClickOutside(wrapperRef, () => setIsOpen(false))

  return (
    <div ref={wrapperRef} className="relative">
      {ButtonUI ? (
        <section className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)}>
          {ButtonUI}
        </section>
      ) : (
        <EllipsisVertical size={24} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
      )}
      {isOpen && (
        <div
          className={cn(
            "absolute end-0 top-[28px] z-[20] w-[124px] divide-y rounded-[4px] border bg-white p-[8px] text-label-medium text-label-normal",
            className
          )}
        >
          {items.map((action, index) => (
            <Button
              key={index}
              className="rounded-none transition-color-custom w-full px-[24px] py-[12px] hover:bg-fill-normal"
              onClick={() => {
                action.onClick()
                setIsOpen(false)
              }}
            >
              {action.label}
            </Button>
          ))}
        </div>
      )}
    </div>
  )
}
