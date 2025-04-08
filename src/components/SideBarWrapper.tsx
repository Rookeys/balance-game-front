import { cn } from "@/utils/cn"
import { ReactNode } from "react"

interface Params {
  containerClassName?: string
  className?: string
  children: ReactNode
}
export default function SideBarWrapper({ containerClassName, className, children }: Params) {
  return (
    <section
      className={cn(
        "hidden h-full flex-shrink-0 flex-col gap-[24px] md:flex md:w-[224px] lg:w-[282px]",
        containerClassName
      )}
    >
      <section className={cn("sticky top-[20px]", className)}>{children}</section>
    </section>
  )
}
