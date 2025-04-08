"use client"

import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { ChevronDown } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"

type FilterOption = {
  value: string
  label: string
}

interface Params {
  filters: FilterOption[]
  defaultLabel?: string
  className?: string
}

export default function Filter({ filters, defaultLabel = "최신순", className }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort")
  const router = useRouter()

  const handleFilter = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", sort)

    router.replace(`?${params.toString()}`, { scroll: false })
  }

  const selectedFilter = filters.find((filter) => filter.value === sort)?.label || defaultLabel

  return (
    <section className={cn("relative z-10 h-[40px] w-[124px]", className)}>
      <Button
        variant="custom"
        className="flex h-full w-full justify-between gap-[8px] rounded-[4px] border px-[12px] py-[8px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{selectedFilter}</p>
        <ChevronDown />
      </Button>
      {isOpen && (
        <section className="absolute end-0 top-[48px] w-full divide-y rounded-[4px] border bg-white p-[8px]">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant="custom"
              className="rounded-none w-full whitespace-nowrap px-[16px] py-[12px]"
              onClick={() => {
                handleFilter(filter.value)
              }}
            >
              {filter.label}
            </Button>
          ))}
        </section>
      )}
    </section>
  )
}
