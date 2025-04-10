import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { prefetchGetResultRanking } from "@/api/orval/server/game-results-controller/game-results-controller"
import { prefetchGetGameStatus } from "@/api/orval/server/main-page-controller/main-page-controller"
import { PrefetchBoundary } from "@/lib/providers/PrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import CommentPageClient from "./_components/CommentPageClient"

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
      <PrefetchBoundary
        prefetchActions={[
          prefetchGetGameStatus(queryClient, Number(id)),
          prefetchGetResultRanking(queryClient, Number(id), {
            size: 3,
            sortType: GetResultRankingSortType.WIN_RATE_DESC
          })
        ]}
        queryClient={queryClient}
        onError={notFound}
      >
        <CommentPageClient />
      </PrefetchBoundary>
    </section>
  )
}
