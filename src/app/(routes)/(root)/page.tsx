import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import RootPageClient from "./_components/RootPageClient"
import { notFound } from "next/navigation"
import { prefetchGetMainGameList } from "@/api/orval/server/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"

export default async function RootPage() {
  const queryClient = new QueryClient()
  try {
    await Promise.all([
      prefetchGetMainGameList(queryClient, { size: 10, sortType: GetMainGameListSortType.week }),
      prefetchGetMainGameList(queryClient, { size: 10, sortType: GetMainGameListSortType.month }),
      prefetchGetMainGameList(queryClient, { size: 10, sortType: GetMainGameListSortType.recent })
    ])
  } catch {
    notFound()
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <RootPageClient />
    </HydrationBoundary>
  )
}
