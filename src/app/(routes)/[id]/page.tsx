// * 테스트용 SSG, ISR, On-demand revalidate 테스트용 페이지
import { notFound } from "next/navigation"

type GameStatus = {
  title: string
  leftSelection: { title: string }
  rightSelection: { title: string }
}

interface Params {
  id: string
}

interface PageProps {
  params: Promise<Params>
}

export const revalidate = 60

export const dynamic = "force-static"

export default async function GamePage({ params }: PageProps) {
  const { id } = await params

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT}/api/v1/games/${Number(id)}`, {
    // cache: "force-cache",
    // next: { revalidate: 60 }
  })

  if (!res.ok) {
    notFound()
  }

  const gameStatus: GameStatus = await res.json()

  return (
    <div className="flex flex-col gap-[12px]">
      <p>game: {gameStatus.title}</p>
      <p>left: {gameStatus.leftSelection.title}</p>
      <p>right: {gameStatus.rightSelection.title}</p>
    </div>
  )
}
