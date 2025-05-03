"use client"
import { useGetResultRanking } from "@/api/orval/client/game-results-controller/game-results-controller"
import { GameResultResponse } from "@/api/orval/model/gameResultResponse"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { getThumbnailUrlByType } from "@/utils/getThumbnailUrlByType"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function RankingTop3() {
  const { id } = useParams()
  const { data } = useGetResultRanking(Number(id), { size: 3, sortType: GetResultRankingSortType.WIN_RATE_DESC })

  return (
    <section className="flex flex-col rounded-[12px] border px-[16px] py-[20px]">
      <p className="mb-[20px] font-sb-aggro-medium text-heading-5">콘텐츠 랭킹 TOP 3</p>
      {data?.content?.map((resource, index) => <RankingCard key={resource.resourceId} {...resource} index={index} />)}
      <Link
        href={`/game/${id}/ranking`}
        className="mx-auto w-fit rounded-[8px] border border-line-normal bg-background px-[20px] py-[12px] text-label-bold"
      >
        랭킹 더보기
      </Link>
      {/* <Button className="mx-auto w-fit bg-gray-100 px-[20px] py-[12px]">랭킹 보러가기</Button> */}
    </section>
  )
}

interface RankingCardProps extends GameResultResponse {
  index: number
}

const RankingCard = ({ index, ...props }: RankingCardProps) => {
  const { id } = useParams()
  return (
    <Link href={`/game/${id}/resources/${props.resourceId}`} className="flex items-center gap-[8px] py-[20px]">
      <p className="flex h-full items-center justify-center text-label-bold">{index + 1}</p>
      <div className="relative my-auto h-[40px] w-[50px] flex-shrink-0">
        <Image
          src={getThumbnailUrlByType({ type: props.type, url: props.content })}
          fill
          alt="thumbnail"
          className="rounded-[8px]"
        />
      </div>
      <article className="flex w-full flex-col gap-[4px]">
        {/* <p className="line-clamp-1">{props?.title || "\u00A0"}</p> */}
        <p className="line-clamp-1 text-label-bold">{props?.title || "\u00A0"}</p>
        <p className="text-caption1-medium text-label-neutral">
          승률 {calculateWinRate(props.winningNums, props.totalPlayNums)}%
        </p>
      </article>
    </Link>
  )
}
