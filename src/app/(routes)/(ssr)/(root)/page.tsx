import { getGetMainGameListQueryKey } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { FetchPrefetchBoundary } from "@/lib/providers/FetchPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import qs from "qs"
import { Suspense } from "react"
import Banner from "./_components/Banner"
import GameCreateSuggestionCTA from "./_components/GameCreateSuggestionCTA"
import MonthlyTrendingGames from "./_components/MonthlyTrendingGames"
import RecentlyGames from "./_components/RecentlyGames"
import SearchAndCategory from "./_components/SearchAndCategory"
import SkeletonList from "./_components/SkeletonCardList"
import SkeletonSimpleCardList from "./_components/SkeletonSimpleCardList"
import WeeklyTrendingGames from "./_components/WeeklyTrendingGames"
import { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true
  }
}

export default async function RootPage() {
  const queryClient = new QueryClient()

  return (
    <section className="flex flex-col items-center gap-[40px]">
      <Banner />
      <section className="flex w-full flex-col items-center gap-[60px] px-[16px] md:px-[24px] lg:px-[120px]">
        <SearchAndCategory />
        <h1 className="sr-only">짱픽 - 이상형 월드컵 커뮤니티</h1>
        <Suspense fallback={<SkeletonList title="주간 인기 월드컵 TOP 10" updateTime={"5분"} />}>
          <FetchPrefetchBoundary
            prefetchActions={fetch(
              `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify({ size: 10, sortType: GetMainGameListSortType.WEEK })}`,
              {
                cache: "force-cache",
                next: { revalidate: 300 }
              }
            )}
            queryKey={getGetMainGameListQueryKey({ size: 10, sortType: GetMainGameListSortType.WEEK })}
            queryClient={queryClient}
            onError={notFound}
          >
            <WeeklyTrendingGames />
          </FetchPrefetchBoundary>
        </Suspense>
        <Suspense fallback={<SkeletonSimpleCardList title="최근 등록된 이상형 월드컵" updateTime="10초" />}>
          <FetchPrefetchBoundary
            prefetchActions={fetch(
              `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify({
                size: 10,
                sortType: GetMainGameListSortType.RECENT
              })}`,
              {
                cache: "force-cache",
                next: { revalidate: 10 }
              }
            )}
            queryKey={getGetMainGameListQueryKey({
              size: 10,
              sortType: GetMainGameListSortType.RECENT
            })}
            queryClient={queryClient}
            onError={notFound}
          >
            <RecentlyGames />
          </FetchPrefetchBoundary>
        </Suspense>
        <Suspense fallback={<SkeletonList title="월간 인기 월드컵 TOP 10" updateTime="5분" />}>
          <FetchPrefetchBoundary
            prefetchActions={fetch(
              `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/list?${qs.stringify({
                size: 10,
                sortType: GetMainGameListSortType.MONTH
              })}`,
              {
                cache: "force-cache",
                next: { revalidate: 300 }
              }
            )}
            queryKey={getGetMainGameListQueryKey({
              size: 10,
              sortType: GetMainGameListSortType.MONTH
            })}
            queryClient={queryClient}
            onError={notFound}
          >
            <MonthlyTrendingGames />
          </FetchPrefetchBoundary>
        </Suspense>
        <GameCreateSuggestionCTA />
      </section>
    </section>
  )
}
