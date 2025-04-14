"use client"

import { Button } from "@/components/Button"
import { useClickOutside } from "@/hooks/useClickOutside"
import { EllipsisVertical } from "lucide-react"
import { useRef, useState } from "react"

export interface MoreAction {
  label: string
  onClick: () => void
}

interface Params {
  actions: MoreAction[]
}

export default function MoreButton({ actions }: Params) {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useClickOutside(wrapperRef, () => setIsOpen(false))

  return (
    <div ref={wrapperRef} className="relative">
      <EllipsisVertical size={24} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <div className="absolute end-0 top-[28px] z-[20] w-[124px] divide-y rounded-[8px] border bg-white px-[8px]">
          {actions.map((action, index) => (
            <Button
              key={index}
              className="w-full px-[24px] py-[20px]"
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
