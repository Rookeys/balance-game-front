"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import { useParams } from "next/navigation"
import InfoCard from "./InforCard"
import LinkCard from "./LinkCard"

export default function TabletCards() {
  const { id } = useParams()
  const { data } = useGetGameStatus(Number(id))
  return (
    <article className="flex w-full max-w-[1200px] flex-col gap-[24px] lg:hidden">
      <div className="flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px]">
        <InfoCard type="category" title="카테고리" items={["카테고리", "카테고리"]} />
        <InfoCard
          type="creator"
          title="제작자"
          creatorProfile={data?.userResponse?.profileImageUrl ?? "/images/Rookeys.png"}
          creatorName={data?.userResponse?.nickname ?? "익명"}
        />
      </div>
      <div className="flex items-center gap-[16px] md:gap-[24px]">
        <LinkCard href={`/games/${id}/comment`} title="전체댓글" image="/images/Rookeys.png" alt="comment-image" />
        <LinkCard href={`/games/${id}/ranking`} title="랭킹" image="/images/Rookeys.png" alt="ranking-image" />
      </div>
    </article>
  )
}
