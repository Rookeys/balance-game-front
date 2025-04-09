"use client"

import { Button } from "@/components/Button"
import { EllipsisVertical } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    document.addEventListener("touchstart", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  return (
    <div ref={wrapperRef} className="relative">
      <EllipsisVertical size={24} className="cursor-pointer" onClick={() => setIsOpen((prev) => !prev)} />
      {isOpen && (
        <div className="absolute end-0 top-[28px] w-[124px] divide-y rounded-[8px] border bg-white px-[8px]">
          {actions.map((action, index) => (
            <Button
              key={index}
              className="px-[24px] py-[20px]"
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
