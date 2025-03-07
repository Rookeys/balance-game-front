"use client"
import MonthlyTrendingGames from "./_components/MonthlyTrendingGames"
import RecentlyGames from "./_components/RecentlyGames"
import WeeklyTrendingGames from "./_components/WeeklyTrendingGames"

export default function Home() {
  return (
    <section className="flex flex-col items-center gap-[60px] bg-red-10 px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
      <WeeklyTrendingGames />
      <RecentlyGames />
      <MonthlyTrendingGames />
    </section>
  )
}
