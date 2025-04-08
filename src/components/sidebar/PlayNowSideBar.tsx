"use client"

import SideBarWrapper from "@/components/SideBarWrapper"
import PlayNow from "./components/PlayNow"

export default function PlayNowSideBar() {
  return (
    <SideBarWrapper className="flex flex-col items-center gap-[20px] rounded-[20px] border px-[16px] py-[20px]">
      <PlayNow />
    </SideBarWrapper>
  )
}
