import { getGetGameStatusQueryKey } from "@/api/orval/client/main-page-controller/main-page-controller"
import {
  getGetResultRankingQueryKey,
  getGetResultRankingUsingPageQueryKey
} from "@/api/orval/client/game-results-controller/game-results-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { FetchPrefetchBoundary } from "@/lib/providers/FetchPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import qs from "qs"
import RankingPageClient from "./_components/RankingPageClient"
import { Metadata } from "next"

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: true
  }
}

interface Params {
  id: string
}

interface SearchParams {
  sort?: string
  keyword?: string
  page?: number
}

interface GameRankingPage {
  params: Promise<Params>
  searchParams: Promise<SearchParams>
}

export default async function RankingPage({ params, searchParams }: GameRankingPage) {
  const [{ id }, { sort, keyword, page }] = await Promise.all([params, searchParams])
  const gameId = Number(id)
  const queryClient = new QueryClient()

  return (
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <FetchPrefetchBoundary
        prefetchActions={[
          fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${gameId}/results?${qs.stringify({
              sortType: GetResultRankingSortType.WIN_RATE_DESC,
              size: 3
            })}`,
            {
              cache: "force-cache",
              next: { revalidate: 300 }
            }
          ),
          fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${gameId}/results/page?${qs.stringify({
              sortType: (sort || GetResultRankingSortType.WIN_RATE_DESC) as GetResultRankingSortType,
              title: keyword || "",
              size: 10,
              page: Number(page) || 1
            })}`,
            {
              cache: "force-cache",
              next: { revalidate: 60 }
            }
          ),
          fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${gameId}`, {
            cache: "force-cache",
            next: { revalidate: 300 }
          })
        ]}
        queryKey={[
          getGetResultRankingQueryKey(gameId, {
            sortType: GetResultRankingSortType.WIN_RATE_DESC,
            size: 3
          }),
          getGetResultRankingUsingPageQueryKey(gameId, {
            sortType: (sort || GetResultRankingSortType.WIN_RATE_DESC) as GetResultRankingSortType,
            title: keyword || "",
            size: 10,
            page: Number(page) || 1
          }),
          getGetGameStatusQueryKey(gameId)
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <RankingPageClient />
      </FetchPrefetchBoundary>
    </section>
  )
}

// import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
// import {
//   prefetchGetResultRanking,
//   prefetchGetResultRankingUsingPage
// } from "@/api/orval/server/game-results-controller/game-results-controller"
// import { prefetchGetGameStatus } from "@/api/orval/server/main-page-controller/main-page-controller"
// import { OrvalPrefetchBoundary } from "@/lib/providers/OrvalPrefetchBoundary"
// import { QueryClient } from "@tanstack/react-query"
// import { notFound } from "next/navigation"
// import RankingPageClient from "./_components/RankingPageClient"

// interface Params {
//   id: string
// }

// interface SearchParams {
//   sort?: string
//   keyword?: string
//   page?: number
// }

// interface GameRankingPage {
//   params: Promise<Params>
//   searchParams: Promise<SearchParams>
// }

// export default async function RankingPage({ params, searchParams }: GameRankingPage) {
//   const [{ id }, { sort, keyword, page }] = await Promise.all([params, searchParams])

//   const queryClient = new QueryClient()

//   return (
//     <section className="mt-[20px] flex justify-center md:mt-[40px]">
//       <OrvalPrefetchBoundary
//         prefetchActions={[
//           prefetchGetResultRanking(queryClient, Number(id), {
//             sortType: GetResultRankingSortType.WIN_RATE_DESC,
//             size: 3
//           }),
//           prefetchGetResultRankingUsingPage(queryClient, Number(id), {
//             sortType: (sort || GetResultRankingSortType.WIN_RATE_DESC) as GetResultRankingSortType,
//             title: keyword || "",
//             size: 10,
//             page: page || 1
//           }),
//           prefetchGetGameStatus(queryClient, Number(id))
//         ]}
//         queryClient={queryClient}
//         onError={notFound}
//       >
//         <RankingPageClient />
//       </OrvalPrefetchBoundary>
//     </section>
//   )
// }
