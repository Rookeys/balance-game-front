import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  rank: number
  name: string
  winRate: string
  wins: number
  src?: string
  iconSrc?: string
  maxWidth?: string
  className?: string
}

export default function RankingResourceCard({ rank, name, winRate, wins, src, iconSrc, className }: Params) {
  return (
    <article className={cn(`flex w-full flex-col items-center gap-[8px]`, className)}>
      <div
        className={`relative ${rank === 1 ? "h-[40px] w-[40px] md:h-[60px] md:w-[60px]" : "h-[28px] w-[28px] md:h-[40px] md:w-[40px]"}`}
      >
        <Image src={iconSrc ?? "/"} alt="/" fill />
      </div>
      <div className="flex w-full flex-col">
        <div className="relative aspect-[5/4] w-full">
          <Image src={src ?? "/"} alt="/" fill />
        </div>
        <div className="px-[16px] py-[8px] md:py-[12px]">
          <p className="line-clamp-2 break-words">{name}</p>
        </div>
        <div className="w-full rounded-[8px] border px-[16px] py-[8px] text-center">
          <p>승률 {winRate}%</p>
          <p>{wins}번 우승</p>
        </div>
      </div>
    </article>
  )
}
