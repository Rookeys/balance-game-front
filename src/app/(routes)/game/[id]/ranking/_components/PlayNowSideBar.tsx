"use client"

import { Button } from "@/components/Button"
import SideBarWrapper from "@/components/SideBarWrapper"
import Image from "next/image"

export default function PlayNowSideBar() {
  return (
    <SideBarWrapper className="flex flex-col items-center gap-[20px] rounded-[20px] border px-[16px] py-[20px]">
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p>이 콘텐츠가 왜 인기 있는지 궁금하다면? 지금 바로 플레이해 보세요!</p>
      <Button className="bg-black text-white">플레이하기</Button>
    </SideBarWrapper>
  )
}
