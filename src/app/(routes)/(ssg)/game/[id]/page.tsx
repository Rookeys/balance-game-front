import { prefetchGetGameStatus } from "@/api/orval/server/main-page-controller/main-page-controller"
import { OrvalPrefetchBoundary } from "@/lib/providers/OrvalPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import GameDetailPageClient from "@/app/(routes)/(ssr)/game/[id]/_components/GameDetailPageClient"

interface Params {
  id: string
}

interface GameDetailPageProps {
  params: Promise<Params>
}

export const revalidate = 300

export const dynamic = "force-static"

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params
  const queryClient = new QueryClient()
  return (
    <section className="mt-[20px] flex flex-col items-center gap-[28px] px-[16px] md:mt-[40px] md:gap-[40px] md:px-[24px] lg:px-0">
      {/* <Suspense fallback={<Skeleton className="h-[600px] w-full" />}> */}
      <OrvalPrefetchBoundary
        prefetchActions={prefetchGetGameStatus(queryClient, Number(id))}
        queryClient={queryClient}
        onError={notFound}
      >
        <GameDetailPageClient />
      </OrvalPrefetchBoundary>
      {/* </Suspense> */}
    </section>
  )
}
