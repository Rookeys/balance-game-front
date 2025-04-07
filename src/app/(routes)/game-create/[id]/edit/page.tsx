import { prefetchGetMyGameStatus } from "@/api/orval/server/user-profile-controller/user-profile-controller"
import GameForm from "@/components/form/gameRoom/GameForm"
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
    await prefetchGetMyGameStatus(queryClient, Number(id))
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
