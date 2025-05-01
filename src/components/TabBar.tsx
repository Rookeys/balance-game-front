"use client"

import { cn } from "@/utils/cn"

export interface TabBarItem {
  value: string | number
  label: string
  onClick: () => void
}

interface TabBarProps {
  items: TabBarItem[]
  currentValue: string | number
  className?: string
}

export default function TabBar({ items, currentValue, className }: TabBarProps) {
  return (
    <section className={cn("flex w-full items-center justify-between", className)}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={item.onClick}
          className={cn(
            "flex h-[56px] w-full items-center justify-center border-b-4 p-[8px]",
            currentValue === item.value && "border-b-black"
          )}
        >
          <p className="line-clamp-1 text-body2-bold text-label-normal">{item.label}</p>
        </button>
      ))}
    </section>
  )
}
