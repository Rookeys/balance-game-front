import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { prefetchGetResource } from "@/api/orval/server/game-resource-controller/game-resource-controller"
import { prefetchGetResultRanking } from "@/api/orval/server/game-results-controller/game-results-controller"
import { PrefetchBoundary } from "@/lib/providers/PrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import GameResultPageClient from "./_components/GameResultPageClient"

interface Params {
  id: string
  resourceId: string
}

// interface SearchParams {
//   tab?: string
// }

interface ResultPageProps {
  params: Promise<Params>
  // searchParams: Promise<SearchParams>
}

export default async function ResultPage({ params }: ResultPageProps) {
  // const [{ id, resourceId }, { tab = "all" }] = await Promise.all([params, searchParams])
  const [{ id, resourceId }] = await Promise.all([params])

  const queryClient = new QueryClient()

  return (
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <PrefetchBoundary
        prefetchActions={[
          prefetchGetResource(queryClient, Number(id), Number(resourceId)),
          prefetchGetResultRanking(queryClient, Number(id), {
            sortType: GetResultRankingSortType.WIN_RATE_DESC,
            size: 3
          })
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <GameResultPageClient />
      </PrefetchBoundary>
    </section>
  )
}
