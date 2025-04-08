"use client"
import InfoCard from "./InforCard"
import StatCard from "./StatCard"

export default function DesktopCards() {
  return (
    <article className="hidden flex-col gap-[24px] lg:flex">
      <div className="flex items-center gap-[24px]">
        <InfoCard type="category" title="카테고리" items={["카테고리", "카테고리"]} />
        <InfoCard
          type="creator"
          title="제작자"
          creatorProfile="/images/Rookeys.png"
          creatorName="닉네임이 들어갈 영역입니다"
        />
      </div>
      <div className="flex items-center gap-[24px]">
        <StatCard title="전체댓글" image="/images/Rookeys.png" alt="comment-image" />
        <StatCard title="랭킹" image="/images/Rookeys.png" alt="ranking-image" />
      </div>
    </article>
  )
}
