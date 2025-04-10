"use client"
import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import InfoCard from "./InforCard"
import StatCard from "./StatCard"
import { useParams } from "next/navigation"

export default function DesktopCards() {
  const { id } = useParams()
  const { data } = useGetGameStatus(Number(id))

  return (
    <article className="hidden flex-col gap-[24px] lg:flex">
      <div className="flex items-center gap-[24px]">
        <InfoCard type="category" title="카테고리" items={data?.categories?.map((category) => category)} />
        <InfoCard
          type="creator"
          title="제작자"
          creatorProfile={data?.userResponse?.profileImageUrl ?? "/images/Rookeys.png"}
          creatorName={data?.userResponse?.nickname ?? "익명"}
        />
      </div>
      <div className="flex items-center gap-[24px]">
        <StatCard title="전체댓글" image="/images/Rookeys.png" alt="comment-image" />
        <StatCard title="랭킹" image="/images/Rookeys.png" alt="ranking-image" />
      </div>
    </article>
  )
}
