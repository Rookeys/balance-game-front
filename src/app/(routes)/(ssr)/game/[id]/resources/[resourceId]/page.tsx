import { getGetResourceQueryKey } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { getGetResultRankingQueryKey } from "@/api/orval/client/game-results-controller/game-results-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { FetchPrefetchBoundary } from "@/lib/providers/FetchPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import qs from "qs"
import GameResourceBottomBar from "./_components/GameResourceBottomBar"
import GameResourcesPageClient from "./_components/GameResourcesPageClient"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false
  }
}

interface Params {
  id: string
  resourceId: string
}

interface ResultPageProps {
  params: Promise<Params>
}

export default async function ResultPage({ params }: ResultPageProps) {
  const { id, resourceId } = await params
  const queryClient = new QueryClient()

  const gameId = Number(id)
  const gameResourceId = Number(resourceId)

  const resultRankingQuery = {
    sortType: GetResultRankingSortType.WIN_RATE_DESC,
    size: 3
  }

  return (
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <FetchPrefetchBoundary
        prefetchActions={[
          fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${gameId}/resources/${gameResourceId}`, {
            cache: "force-cache",
            next: { revalidate: 60 }
          }),
          fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${gameId}/results?${qs.stringify(resultRankingQuery)}`,
            {
              cache: "force-cache",
              next: { revalidate: 60 }
            }
          )
        ]}
        queryKey={[
          getGetResourceQueryKey(gameId, gameResourceId),
          getGetResultRankingQueryKey(gameId, resultRankingQuery)
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <GameResourcesPageClient />
        <GameResourceBottomBar />
      </FetchPrefetchBoundary>
    </section>
  )
}

// import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
// import { prefetchGetResource } from "@/api/orval/server/game-resource-controller/game-resource-controller"
// import { prefetchGetResultRanking } from "@/api/orval/server/game-results-controller/game-results-controller"
// import { OrvalPrefetchBoundary } from "@/lib/providers/OrvalPrefetchBoundary"
// import { QueryClient } from "@tanstack/react-query"
// import { notFound } from "next/navigation"
// import GameResultPageClient from "./_components/GameResultPageClient"

// interface Params {
//   id: string
//   resourceId: string
// }

// // interface SearchParams {
// //   tab?: string
// // }

// interface ResultPageProps {
//   params: Promise<Params>
//   // searchParams: Promise<SearchParams>
// }

// export default async function ResultPage({ params }: ResultPageProps) {
//   // const [{ id, resourceId }, { tab = "all" }] = await Promise.all([params, searchParams])
//   const [{ id, resourceId }] = await Promise.all([params])

//   const queryClient = new QueryClient()

//   return (
//     <section className="mt-[20px] flex justify-center md:mt-[40px]">
//       <OrvalPrefetchBoundary
//         prefetchActions={[
//           prefetchGetResource(queryClient, Number(id), Number(resourceId)),
//           prefetchGetResultRanking(queryClient, Number(id), {
//             sortType: GetResultRankingSortType.WIN_RATE_DESC,
//             size: 3
//           })
//         ]}
//         queryClient={queryClient}
//         onError={notFound}
//       >
//         <GameResultPageClient />
//       </OrvalPrefetchBoundary>
//     </section>
//   )
// }
