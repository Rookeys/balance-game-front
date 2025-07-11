"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import { useParams } from "next/navigation"
import InfoCard from "./InfoCard"
import LinkCard from "./LinkCard"

export default function TabletCards() {
  const { id } = useParams()
  const { data } = useGetGameStatus(Number(id))
  return (
    <article className="flex w-full max-w-[1200px] flex-col gap-[24px] lg:hidden">
      <div className="flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px]">
        <InfoCard type="category" title="카테고리" items={data?.categories?.map((category) => category)} />
        <InfoCard
          type="creator"
          title="제작자"
          creatorProfile={data?.userResponse?.profileImageUrl || "/images/character/pixy_profile.webp"}
          creatorName={data?.userResponse?.nickname ?? "익명"}
        />
      </div>
      <div className="flex items-center gap-[16px] md:gap-[24px]">
        <LinkCard href={`/game/${id}/comment`} title="전체댓글" image="/images/icons/chat.webp" alt="comment-image" />
        <LinkCard href={`/game/${id}/ranking`} title="랭킹" image="/images/icons/trophy.webp" alt="ranking-image" />
      </div>
    </article>
  )
}
