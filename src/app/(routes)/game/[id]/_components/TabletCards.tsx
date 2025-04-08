"use client"

import InfoCard from "./InforCard"
import StatCard from "./StatCard"

export default function TabletCards() {
  return (
    <article className="flex w-full max-w-[1200px] flex-col gap-[24px] lg:hidden">
      <div className="flex flex-col items-center gap-[16px] md:flex-row md:gap-[24px]">
        <InfoCard type="category" title="카테고리" items={["카테고리", "카테고리"]} />
        <InfoCard
          type="creator"
          title="제작자"
          creatorProfile="/images/Rookeys.png"
          creatorName="닉네임이 들어갈 영역입니다"
        />
      </div>
      <div className="flex items-center gap-[16px] md:gap-[24px]">
        <StatCard title="전체댓글" image="/images/Rookeys.png" alt="comment-image" />
        <StatCard title="랭킹" image="/images/Rookeys.png" alt="ranking-image" />
      </div>
    </article>
  )
}
