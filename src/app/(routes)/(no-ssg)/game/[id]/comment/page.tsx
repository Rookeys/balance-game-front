import { getGetResultRankingQueryKey } from "@/api/orval/client/game-results-controller/game-results-controller"
import { getGetGameStatusQueryKey } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { FetchPrefetchBoundary } from "@/lib/providers/FetchPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import qs from "qs"
import CommentPageClient from "./_components/CommentPageClient"
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

interface GameCommentPageProps {
  params: Promise<Params>
}

export default async function CommentPage({ params }: GameCommentPageProps) {
  const { id } = await params
  const queryClient = new QueryClient()

  return (
    <section className="mt-[20px] flex justify-center md:mt-[40px]">
      <FetchPrefetchBoundary
        prefetchActions={[
          fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${id}`, {
            cache: "force-cache",
            next: { revalidate: 60 }
          }),
          fetch(
            `${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${id}/results?${qs.stringify({
              size: 3,
              sortType: GetResultRankingSortType.WIN_RATE_DESC
            })}`,
            {
              cache: "force-cache",
              next: { revalidate: 60 }
            }
          )
        ]}
        queryKey={[
          getGetGameStatusQueryKey(Number(id)),
          getGetResultRankingQueryKey(Number(id), {
            size: 3,
            sortType: GetResultRankingSortType.WIN_RATE_DESC
          })
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <CommentPageClient />
      </FetchPrefetchBoundary>
    </section>
  )
}

// import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
// import { prefetchGetResultRanking } from "@/api/orval/server/game-results-controller/game-results-controller"
// import { prefetchGetGameStatus } from "@/api/orval/server/main-page-controller/main-page-controller"
// import { OrvalPrefetchBoundary } from "@/lib/providers/OrvalPrefetchBoundary"
// import { QueryClient } from "@tanstack/react-query"
// import { notFound } from "next/navigation"
// import CommentPageClient from "./_components/CommentPageClient"

// interface Params {
//   id: string
// }

// interface GameCommentPageProps {
//   params: Promise<Params>
// }
// export default async function CommentPage({ params }: GameCommentPageProps) {
//   const { id } = await params
//   const queryClient = new QueryClient()
//   return (
//     <section className="mt-[20px] flex justify-center md:mt-[40px]">
//       <OrvalPrefetchBoundary
//         prefetchActions={[
//           prefetchGetGameStatus(queryClient, Number(id)),
//           prefetchGetResultRanking(queryClient, Number(id), {
//             size: 3,
//             sortType: GetResultRankingSortType.WIN_RATE_DESC
//           })
//         ]}
//         queryClient={queryClient}
//         onError={notFound}
//       >
//         <CommentPageClient />
//       </OrvalPrefetchBoundary>
//     </section>
//   )
// }
