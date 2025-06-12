"use client"

import { cn } from "@/utils/cn"

export interface StepTabItem {
  value: string | number
  label: string
  onClick: () => void
}

interface StepTabProps {
  items: StepTabItem[]
  currentValue: string | number
  className?: string
}

export default function StepTab({ items, currentValue, className }: StepTabProps) {
  return (
    <section
      className={cn("my-[20px] flex w-full max-w-[484px] rounded-[12px] bg-fill-normal p-[4px] md:hidden", className)}
    >
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={item.onClick}
          className={cn(
            "transition-color-customs w-full rounded-[12px] py-[8px]",
            currentValue === item.value
              ? "bg-background text-label-bold text-label-normal"
              : "bg-transparent text-label-medium text-label-neutral"
          )}
        >
          {item.label}
        </button>
      ))}
    </section>
  )
}
