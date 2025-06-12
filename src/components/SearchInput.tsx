"use client"

import IconButton from "@/components/IconButton"
import { cn } from "@/utils/cn"
import type { LucideProps } from "lucide-react"
import { useRef, type ComponentType, type InputHTMLAttributes, type SVGProps } from "react"

interface Params extends InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
  Icon?: ComponentType<SVGProps<SVGSVGElement>>
  iconProps?: Omit<LucideProps, "ref">
  className?: string
  inputClassName?: string
}

export default function SearchInput({
  onSearch,
  Icon,
  iconProps,
  className,
  inputClassName = "h-[40px] md:h-[48px]",
  ...props
}: Params) {
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
    <section className={cn("relative flex w-full items-center", className)}>
      <input
        {...props}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        className={cn(
          "h-full w-full rounded-[12px] border border-transparent bg-fill-normal px-[24px] py-[12px] text-body2-regular outline-none placeholder:text-label-neutral focus:border-primary-normal",
          Icon && `ps-[48px]`,
          inputClassName
        )}
      />
      {Icon && <IconButton onClick={handleClick} className="absolute start-[16px]" Icon={Icon} iconProps={iconProps} />}
    </section>
  )
}
