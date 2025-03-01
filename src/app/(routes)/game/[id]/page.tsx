import {
  prefetchContinuePlayRoom,
  prefetchGetGameDetails
} from "@/api/orval/server/game-play-controller/game-play-controller"
import { COOKIE_KEY } from "@/constants/cookie"
import { log } from "@/utils/log"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"
import NewGamePageClient from "./_components/NewGamePageClient"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import GamePlayPageClient from "./_components/GamePlayPageClient"

interface Params {
  id: string
}

interface GamePlayPageProps {
  params: Promise<Params>
}

export default async function Game({ params }: GamePlayPageProps) {
  const { id } = await params
  const cookieStore = await cookies()
  const existingGameID = cookieStore.get(COOKIE_KEY.GAME_ID)
  const queryClient = new QueryClient()

  try {
    await Promise.all([
      prefetchGetGameDetails(queryClient, Number(id)),
      existingGameID && prefetchContinuePlayRoom(queryClient, Number(id), Number(existingGameID?.value))
    ])

    if (existingGameID) {
      // Todo 게임하기 or 이어하기 설정, 완료 시 쿠키삭제
      return (
        <HydrationBoundary state={dehydrate(queryClient)}>
          <GamePlayPageClient gameId={Number(existingGameID.value)} />
        </HydrationBoundary>
      )
    } else {
      // Todo 일부공개 시 inviteCode 넣는 로직
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
