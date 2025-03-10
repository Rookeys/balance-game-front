"use client"

import SearchInput from "@/components/SearchInput"
import { Search } from "lucide-react"
import MonthlyTrendingGames from "./MonthlyTrendingGames"
import RecentlyGames from "./RecentlyGames"
import WeeklyTrendingGames from "./WeeklyTrendingGames"
import CategorySlider from "./CategorySlider"
export default function RootPageClient() {
  return (
    <section className="flex flex-col items-center gap-[60px] bg-red-10 px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
      <article className="flex w-full max-w-[1200px] flex-col gap-[40px]">
        <div className="w-full max-w-[720px] self-center">
          <SearchInput
            Icon={Search}
            iconProps={{ color: "#686E75" }}
            onSearch={() => console.log("클릭")}
            placeholder="제목, 인물 이름으로 월드컵 찾기"
          />
        </div>
        <CategorySlider />
      </article>
      <WeeklyTrendingGames />
      <RecentlyGames />
      <MonthlyTrendingGames />
    </section>
  )
}
