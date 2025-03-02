import { prefetchGetResource } from "@/api/orval/server/game-resource-controller/game-resource-controller"
import { log } from "@/utils/log"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import GameResultPageClient from "./_components/GameResultPageClient"
import { prefetchGetGameDetails } from "@/api/orval/server/game-play-controller/game-play-controller"

interface Params {
  id: string
}

interface ResultPageProps {
  params: Promise<Params>
  searchParams: Promise<{
    resourceId?: string
  }>
}

export default async function Page({ params, searchParams }: ResultPageProps) {
  // const [resolvedParams, resolvedSearchParams] = await Promise.all([params, searchParams])

  const { id } = await params
  const { resourceId } = await searchParams

  const queryClient = new QueryClient()
  try {
    await Promise.all([
      prefetchGetGameDetails(queryClient, Number(id)),
      prefetchGetResource(queryClient, Number(id), Number(resourceId))
    ])
  } catch (error) {
    log(error)
    notFound()
  }

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <GameResultPageClient />
    </HydrationBoundary>
  )
}
