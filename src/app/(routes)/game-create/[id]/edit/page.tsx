import { prefetchGetGameStatus } from "@/api/orval/server/game-room-controller/game-room-controller"
import GameForm from "@/components/form/gameForm"
import { log } from "@/utils/log"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"

interface Params {
  id: string
}

interface GameEditPageProps {
  params: Promise<Params>
}

export default async function GameEditPage({ params }: GameEditPageProps) {
  const { id } = await params

  const queryClient = new QueryClient()
  try {
    await prefetchGetGameStatus(queryClient, Number(id))
  } catch (error) {
    log("error", error)
    notFound()
  }

  return (
    <section className="my-[80px] flex justify-center px-[16px]">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GameForm />
      </HydrationBoundary>
    </section>
  )
}
