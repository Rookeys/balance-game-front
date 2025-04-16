"use client"

import SideBarWrapper from "@/components/SideBarWrapper"
import PlayNow from "./components/PlayNow"
import RankingTop3 from "./components/RankingTop3"

export default function PlayNowAndRankingSideBar() {
  return (
    <SideBarWrapper>
      <PlayNow />
      <RankingTop3 />
    </SideBarWrapper>
  )
}
