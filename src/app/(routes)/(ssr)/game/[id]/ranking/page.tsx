import { prefetchGetResultRanking } from "@/api/orval/server/game-results-controller/game-results-controller"
import { PrefetchBoundary } from "@/lib/providers/PrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import RankingPageClient from "./_components/RankingPageClient"
import { prefetchGetGameStatus } from "@/api/orval/server/main-page-controller/main-page-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"

interface Params {
  id: string
}

interface SearchParams {
  sort?: string
  keyword?: string
}

interface GameRankingPage {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

export default async function RankingPage({ params, searchParams }: GameRankingPage) {
  const [{ id }, { sort, keyword }] = await Promise.all([params, searchParams])

  const queryClient = new QueryClient()

  return (
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <PrefetchBoundary
        prefetchActions={[
          prefetchGetResultRanking(queryClient, Number(id), {
            sortType: GetResultRankingSortType.WIN_RATE_DESC,
            size: 3
          }),
          prefetchGetResultRanking(queryClient, Number(id), {
            sortType: (sort || GetResultRankingSortType.WIN_RATE_DESC) as GetResultRankingSortType,
            size: 10,
            title: keyword
          }),
          prefetchGetGameStatus(queryClient, Number(id))
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <RankingPageClient />
      </PrefetchBoundary>
    </section>
  )
}
