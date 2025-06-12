"use client"

import SideBarWrapper from "@/components/SideBarWrapper"
import PlayNow from "./components/PlayNow"

export default function PlayNowSideBar() {
  return (
    <SideBarWrapper>
      <PlayNow text={`왜 인기 있는지 궁금하다면?\n지금 바로 플레이해 보세요!`} />
    </SideBarWrapper>
  )
}
