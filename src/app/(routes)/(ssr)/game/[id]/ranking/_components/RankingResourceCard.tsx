import { cn } from "@/utils/cn"
import Image from "next/image"

interface Params {
  rank: number
  name?: string
  winRate: string
  wins?: number
  src?: string
  iconSrc?: string
  maxWidth?: string
  className?: string
}

export default function RankingResourceCard({ rank, name, winRate, wins, src, iconSrc, className }: Params) {
  return (
    <article
      className={cn(`flex w-full flex-col items-center gap-[8px]`, rank === 1 && "pb-[24px] md:pb-[40px]", className)}
    >
      <figure className="relative h-[28px] w-[28px] md:h-[40px] md:w-[40px]">
        <Image src={iconSrc ?? "/"} alt="/" fill />
      </figure>
      {/* <div className="flex w-full flex-col rounded-[12px] bg-red-300"> */}
      <div className="flex w-full flex-col overflow-hidden rounded-[12px] bg-fill-normal pb-[8px] pt-[2px] md:pt-[4px]">
        <div className="px-[2px] md:px-[4px]">
          <figure className="relative h-[84px] w-full overflow-hidden rounded-t-[12px] md:h-[108px]">
            <Image src={src ?? "/"} alt="/" fill className="object-cover" />
          </figure>
        </div>
        <div className="h-[60px] px-[4px] pb-[8px] pt-[4px] md:h-[56px] md:px-[8px] md:pt-[8px]">
          <p className="line-clamp-3 break-words text-center text-caption1-bold md:line-clamp-2 md:text-label-bold">
            {rank}등 {name}
          </p>
        </div>
        <div className="flex flex-col gap-[4px] px-[4px] md:px-[8px]">
          <p className="w-fit rounded-[4px] bg-line-neutral px-[8px] py-[4px] text-caption2-medium text-label-normal md:text-caption1-medium">
            승률 {winRate}%
          </p>
          <p className="w-fit rounded-[4px] bg-line-neutral px-[8px] py-[4px] text-caption2-medium text-label-normal md:text-caption1-medium">
            {wins}번 우승
          </p>
        </div>
      </div>
    </article>
  )
}
