"use client"

import Image from "next/image"
import DesktopCards from "./_components/DesktopCards"
import DesktopPlayButton from "./_components/DesktopPlayButton"
import TabletCards from "./_components/TabletCards"
import TabletPlayButton from "./_components/TabletPlayButton"

export default function GameDetailPage() {
  return (
    <section className="mt-[20px] flex flex-col items-center gap-[28px] px-[16px] md:mt-[40px] md:gap-[40px] md:px-[24px] lg:px-0">
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px] md:flex-row md:gap-[24px]">
        <div className="relative aspect-[5/4] h-fit w-full md:max-w-[50%]">
          <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
        </div>
        <section className="flex w-full flex-col gap-[28px] md:max-w-[50%] md:gap-[40px]">
          <article className="flex items-center gap-[12px]">
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">256개의 콘텐츠</p>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">128강까지 플레이 가능</p>
          </article>
          <article className="flex flex-col gap-[12px]">
            <p>출시일 2025.03.16 / 수정일 2025.03.23</p>
            <p>타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.</p>
            <p>
              간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 설명이 들어가는 영역입니다. 설명이 들어가는
              영역입니다. 설명이
            </p>
          </article>
          <DesktopCards />
          <DesktopPlayButton />
        </section>
      </section>
      <TabletCards />
      <TabletPlayButton />
    </section>
  )
}
