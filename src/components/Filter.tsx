"use client"

import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/Button"
import { useRouter, useSearchParams } from "next/navigation"

const filters = [
  { value: GetMainGameListSortType.RECENT, label: "최신순" },
  { value: GetMainGameListSortType.WEEK, label: "인기순" }
]

export default function Filter() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort")
  const router = useRouter()

  const handleFilter = (sort: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("sort", sort)

    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <section className="relative z-10">
      <Button
        variant="custom"
        className="flex gap-[8px] rounded-[4px] border px-[12px] py-[8px]"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <p>{sort === GetMainGameListSortType.OLD ? "오래된순" : "최신순"}</p>
        <ChevronDown />
      </Button>
      {isOpen && (
        <section className="absolute end-0 top-[48px] divide-y rounded-[4px] border bg-white p-[8px]">
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
