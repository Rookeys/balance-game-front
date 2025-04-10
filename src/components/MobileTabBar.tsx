"use client"

import { cn } from "@/utils/cn"

export interface MobileTabBarItem {
  value: string
  label: string
  onClick: () => void
}

interface MobileTabBarProps {
  items: MobileTabBarItem[]
  activeValue: string
  className?: string
}

export default function MobileTabBar({ items, activeValue, className }: MobileTabBarProps) {
  return (
    <section className={cn("flex w-full justify-between md:hidden", className)}>
      {items.map((item) => (
        <button
          key={item.value}
          type="button"
          onClick={item.onClick}
          className={cn(
            "flex h-[56px] w-full items-center justify-center border-b-4 p-[8px]",
            activeValue === item.value && "border-b-black"
          )}
        >
          <p>{item.label}</p>
        </button>
      ))}
    </section>
  )
}
