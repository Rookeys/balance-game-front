"use client"

import SearchInput from "@/components/SearchInput"
import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import CategorySlider from "./CategorySlider"
import { COLORS } from "@/styles/theme/colors"

export default function SearchAndCategory() {
  const router = useRouter()

  const handleSearch = (keyword: string) => {
    const params = new URLSearchParams()
    params.set("keyword", keyword)

    router.push(`/search?${params.toString()}`)
  }

  return (
    <article className="flex w-full max-w-[1200px] flex-col gap-[40px]">
      <div className="w-full max-w-[720px] self-center">
        <SearchInput
          Icon={Search}
          iconProps={{ color: COLORS.NEUTRAL_700 }}
          onSearch={handleSearch}
          placeholder="제목으로 월드컵 찾기"
        />
      </div>
      <CategorySlider />
    </article>
  )
}
