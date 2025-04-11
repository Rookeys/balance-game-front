"use client"

import { cn } from "@/utils/cn"

export interface TabBarItem {
  value: string
  label: string
  onClick: () => void
}

interface TabBarProps {
  items: TabBarItem[]
  currentValue: string
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
          <p>{item.label}</p>
        </button>
      ))}
    </section>
  )
}
