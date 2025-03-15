"use client"

import IconButton from "@/components/IconButton"
import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import { useRef, type ComponentType, type InputHTMLAttributes, type SVGProps } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
}

export default function SearchInput({ onSearch, Icon, iconProps, ...props }: Params) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && onSearch) {
      onSearch(e.currentTarget.value)
    }
  }

  const handleClick = () => {
    if (onSearch && inputRef.current) {
      onSearch(inputRef.current.value)
    }
  }

  return (
    <section className="relative flex w-full items-center">
      <input
        {...props}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        className={cn(
          "w-full rounded-[12px] bg-blue-10 px-[24px] py-[12px] outline-none placeholder:text-[#686E75]",
          Icon && `ps-[56px]`,
          props.className
        )}
      />
      {Icon && <IconButton onClick={handleClick} className="absolute start-[24px]" Icon={Icon} iconProps={iconProps} />}
    </section>
  )
}
