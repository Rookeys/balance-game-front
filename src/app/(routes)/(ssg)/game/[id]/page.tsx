import { getGetGameStatusQueryKey } from "@/api/orval/client/main-page-controller/main-page-controller"
import GameDetailPageClient from "@/app/(routes)/(ssr)/game/[id]/_components/GameDetailPageClient"
import { FetchPrefetchBoundary } from "@/lib/providers/FetchPrefetchBoundary"
import { QueryClient } from "@tanstack/react-query"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface Params {
  id: string
}

interface GameDetailPageProps {
  params: Promise<Params>
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${id}`, {
    cache: "force-cache",
    next: { revalidate: 300 }
  })

  if (!res.ok) return {}

  const data = await res.json()

  const title = data.title ?? "게임 상세"
  const description = `이상형월드컵 ${data.title}의 상세페이지 입니다. 정보를 확인하고, 플레이해 보세요!`
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://zznpk.com/game/${id}`
    },
    twitter: {
      title,
      description
    }
  }
}

export const revalidate = 300
export const dynamic = "force-static"

export default async function GameDetailPage({ params }: GameDetailPageProps) {
  const { id } = await params
  const queryClient = new QueryClient()

  return (
    <section className="mt-[20px] flex flex-col items-center gap-[28px] px-[16px] md:mt-[40px] md:gap-[40px] md:px-[24px] lg:px-0">
      <FetchPrefetchBoundary
        prefetchActions={fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${id}`, {
          cache: "force-cache",
          next: { revalidate: 300 }
        })}
        queryKey={getGetGameStatusQueryKey(Number(id))}
        queryClient={queryClient}
        onError={notFound}
      >
        <GameDetailPageClient />
      </FetchPrefetchBoundary>
    </section>
  )
}
