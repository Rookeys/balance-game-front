import {
  prefetchContinuePlayRoom,
  prefetchGetGameDetails
} from "@/api/orval/server/game-play-controller/game-play-controller"
import { COOKIE_KEY } from "@/constants/cookie"
import { log } from "@/utils/log"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import GamePlayPageClient from "./_components/GamePlayPageClient"
import NewGamePageClient from "./_components/NewGamePageClient"

interface Params {
  id: string
}

interface GamePlayPageProps {
  params: Promise<Params>
}

export default async function Game({ params }: GamePlayPageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const previousGameId = cookieStore.get(COOKIE_KEY.GAME_ID)
  const existingPlayId = cookieStore.get(COOKIE_KEY.PLAY_ID)
  const queryClient = new QueryClient()

  const isSameGameId = previousGameId?.value === id

  try {
    await Promise.all([
      prefetchGetGameDetails(queryClient, Number(id)),
      isSameGameId && existingPlayId && prefetchContinuePlayRoom(queryClient, Number(id), Number(existingPlayId?.value))
    ])

    if (isSameGameId && existingPlayId) {
      return (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GamePlayPageClient playId={Number(existingPlayId.value)} />
        </HydrationBoundary>
      )
    } else {
      return (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <NewGamePageClient />
        </HydrationBoundary>
      )
    }
  } catch (error) {
    log(error)
    notFound()
  }
}
