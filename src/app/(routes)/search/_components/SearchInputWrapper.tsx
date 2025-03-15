"use client"

import SearchInput from "@/components/SearchInput"
import { Search } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"

export default function SearchInputWrapper() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handleSearch = (keyword: string) => {
    const params = new URLSearchParams(searchParams)
    params.set("keyword", keyword)

    router.replace(`?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="w-full max-w-[720px] self-center">
      <SearchInput
        Icon={Search}
        iconProps={{ color: "#686E75" }}
        onSearch={handleSearch}
        placeholder="제목, 인물 이름으로 월드컵 찾기"
        className="h-[48px]"
      />
    </div>
  )
}
