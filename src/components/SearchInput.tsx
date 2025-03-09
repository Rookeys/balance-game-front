"use client"

import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import type { ComponentType, InputHTMLAttributes, SVGProps } from "react"
import IconButton from "@/components/IconButton"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: () => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function SearchInput({ onSearch, Icon, iconProps, ...props }: Params) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch()
    }
  }

  return (
    <section className="relative flex w-full items-center">
      <input
        {...props}
        onKeyDown={handleKeyDown}
        className={cn(
          "w-full rounded-[12px] bg-blue-10 px-[24px] py-[12px] outline-none placeholder:text-[#686E75]",
          Icon && `ps-[56px]`,
          props.className
        )}
      />
      {Icon && <IconButton onClick={onSearch} className="absolute start-[24px]" Icon={Icon} iconProps={iconProps} />}
    </section>
  )
}
