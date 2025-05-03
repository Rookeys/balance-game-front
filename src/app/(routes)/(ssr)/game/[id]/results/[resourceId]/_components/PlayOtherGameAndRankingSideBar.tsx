"use client"
import PlayOtherGame from "@/components/sidebar/components/PlayOtherGame"
import RankingTop3 from "@/components/sidebar/components/RankingTop3"
import SideBarWrapper from "@/components/SideBarWrapper"

export default function PlayOtherGameAndRankingSideBar() {
  return (
    <SideBarWrapper>
      <div className="flex flex-col items-center gap-[20px] rounded-[12px] border px-[16px] py-[20px]">
        <PlayOtherGame />
      </div>
      <RankingTop3 />
    </SideBarWrapper>
  )
}
