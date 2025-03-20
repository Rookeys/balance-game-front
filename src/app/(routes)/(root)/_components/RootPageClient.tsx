"use client"

import { useSessionStore } from "@/store/session"
import Banner from "./Banner"
import GameCreateSuggestionCTA from "./GameCreateSuggestionCTA"
import MonthlyTrendingGames from "./MonthlyTrendingGames"
import RecentlyGames from "./RecentlyGames"
import SearchAndCategory from "./SearchAndCategory"
import WeeklyTrendingGames from "./WeeklyTrendingGames"
import { signOut } from "next-auth/react"
export default function RootPageClient() {
  const clearSession = useSessionStore((state) => state.clearSession)
  return (
    <section className="flex flex-col items-center gap-[40px]">
      <button
        onClick={() => {
          clearSession()
          signOut({ callbackUrl: "/" })
        }}
      >
        로그아웃 (테스트)
      </button>
      <Banner />
      <section className="flex w-full flex-col items-center gap-[60px] bg-red-10 px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
        <SearchAndCategory />
        <WeeklyTrendingGames />
        <RecentlyGames />
        <MonthlyTrendingGames />
        <GameCreateSuggestionCTA />
      </section>
    </section>
  )
}
