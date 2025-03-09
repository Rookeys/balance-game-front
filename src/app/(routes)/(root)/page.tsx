"use client"
import SearchInput from "@/components/SearchInput"
import { Search } from "lucide-react"
import MonthlyTrendingGames from "./_components/MonthlyTrendingGames"
import RecentlyGames from "./_components/RecentlyGames"
import WeeklyTrendingGames from "./_components/WeeklyTrendingGames"

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-[60px] bg-red-10 px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
      <div className="w-full max-w-[720px]">
        <SearchInput
          Icon={Search}
          iconProps={{ color: "#686E75" }}
          onSearch={() => console.log("클릭")}
          placeholder="제목, 인물 이름으로 월드컵 찾기"
        />
      </div>
      <WeeklyTrendingGames />
      <RecentlyGames />
      <MonthlyTrendingGames />
    </section>
  )
}
