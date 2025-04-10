import { cn } from "@/utils/cn"
import { ReactNode } from "react"

interface Params {
  className?: string
  children: ReactNode
}

export default function BottomBarWrapper({ className, children }: Params) {
  return (
    <section
      className={cn(
        "fixed bottom-0 z-10 flex w-full flex-col gap-[12px] border-t bg-white px-[16px] pb-[20px] pt-[12px] md:hidden",
        className
      )}
    >
      {children}
    </section>
  )
}
