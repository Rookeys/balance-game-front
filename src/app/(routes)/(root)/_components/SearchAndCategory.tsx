"use client"

import SearchInput from "@/components/SearchInput"
import { Search } from "lucide-react"
import CategorySlider from "./CategorySlider"

export default function SearchAndCategory() {
  return (
    <article className="flex w-full max-w-[1200px] flex-col gap-[40px]">
      <div className="w-full max-w-[720px] self-center">
        <SearchInput
          Icon={Search}
          iconProps={{ color: "#686E75" }}
          onSearch={() => console.log("검색")}
          placeholder="제목, 인물 이름으로 월드컵 찾기"
          className="h-[48px]"
        />
      </div>
      <CategorySlider />
    </article>
  )
}
