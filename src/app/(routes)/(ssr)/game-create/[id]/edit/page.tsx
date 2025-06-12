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
    <section className="mb-[80px] flex flex-col justify-center md:mb-[120px] md:mt-[40px] md:flex-row">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <GameForm />
      </HydrationBoundary>
    </section>
  )
}
