import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { prefetchGetMainGameList } from "@/api/orval/server/main-page-controller/main-page-controller"
import Banner from "@/app/(routes)/(root)/_components/Banner"
import GameCreateSuggestionCTA from "@/app/(routes)/(root)/_components/GameCreateSuggestionCTA"
import MonthlyTrendingGames from "@/app/(routes)/(root)/_components/MonthlyTrendingGames"
import RecentlyGames from "@/app/(routes)/(root)/_components/RecentlyGames"
import SearchAndCategory from "@/app/(routes)/(root)/_components/SearchAndCategory"
import WeeklyTrendingGames from "@/app/(routes)/(root)/_components/WeeklyTrendingGames"
import { PrefetchBoundary } from "@/lib/providers/PrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import SkeletonList from "./_components/SkeletonCardList"
import SkeletonSimpleCardList from "./_components/SkeletonSimpleCardList"

export default async function RootPage() {
  const queryClient = new QueryClient()

  return (
    <section className="flex flex-col items-center gap-[40px]">
      <Banner />
      <section className="flex w-full flex-col items-center gap-[60px] px-[16px] md:gap-[80px] md:px-[24px] lg:px-[120px]">
        <SearchAndCategory />
        <Suspense fallback={<SkeletonList title="주간 인기 월드컵 TOP 10" titleIcon="💥" />}>
          <PrefetchBoundary
            prefetchActions={prefetchGetMainGameList(queryClient, { size: 10, sortType: GetMainGameListSortType.WEEK })}
            queryClient={queryClient}
            onError={notFound}
          >
            <WeeklyTrendingGames />
          </PrefetchBoundary>
        </Suspense>
        <Suspense fallback={<SkeletonSimpleCardList title="최근 등록된 이상형 월드컵" titleIcon="✨" />}>
          <PrefetchBoundary
            prefetchActions={prefetchGetMainGameList(queryClient, {
              size: 10,
              sortType: GetMainGameListSortType.RECENT
            })}
            queryClient={queryClient}
            onError={notFound}
          >
            <RecentlyGames />
          </PrefetchBoundary>
        </Suspense>
        <Suspense fallback={<SkeletonList title="월간 인기 월드컵 TOP 10" titleIcon="🕹️" />}>
          <PrefetchBoundary
            prefetchActions={prefetchGetMainGameList(queryClient, {
              size: 10,
              sortType: GetMainGameListSortType.MONTH
            })}
            queryClient={queryClient}
            onError={notFound}
          >
            <MonthlyTrendingGames />
          </PrefetchBoundary>
        </Suspense>
        <GameCreateSuggestionCTA />
      </section>
    </section>
  )
}
