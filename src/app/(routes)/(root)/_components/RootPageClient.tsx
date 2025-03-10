"use client"

import Banner from "./Banner"
import MonthlyTrendingGames from "./MonthlyTrendingGames"
import RecentlyGames from "./RecentlyGames"
import SearchAndCategory from "./SearchAndCategory"
import WeeklyTrendingGames from "./WeeklyTrendingGames"
export default function RootPageClient() {
  return (
    <section className="flex flex-col items-center gap-[40px]">
      <Banner />
      <section className="flex w-full flex-col items-center gap-[60px] bg-red-10 px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
        <SearchAndCategory />
        <WeeklyTrendingGames />
        <RecentlyGames />
        <MonthlyTrendingGames />
      </section>
    </section>
  )
}
