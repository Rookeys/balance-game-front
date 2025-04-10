"use client"

import SideBarWrapper from "@/components/SideBarWrapper"
import PlayNow from "./components/PlayNow"
import RankingTop3 from "./components/RankingTop3"

export default function PlayNowAndRankingSideBar() {
  return (
    <SideBarWrapper>
      <div className="flex flex-col items-center gap-[20px] rounded-[20px] border px-[16px] py-[20px]">
        <PlayNow />
      </div>
      <RankingTop3 />
    </SideBarWrapper>
  )
}
