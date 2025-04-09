"use client"

import Image from "next/image"
import MobilePlayNowButton from "./MobilePlayNowButton"

export default function GameInformation() {
  return (
    <section className="flex w-full flex-col gap-[28px] md:flex-row md:gap-[24px]">
      <div className="relative aspect-[5/4] h-fit w-full flex-shrink-0 md:max-w-[50%] lg:max-w-[40%]">
        <Image src={"/images/Rookeys.png"} alt="logo" fill className="rounded-[8px] object-cover" />
      </div>
      <section className="flex w-full flex-col gap-[12px] md:gap-[24px] lg:gap-[40px]">
        <article className="flex items-center gap-[12px]">
          <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">카테고리</p>
          <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">카테고리</p>
        </article>
        <article className="flex flex-col gap-[12px]">
          <p>타이틀이 들어가는 영역입니다. 최대 50자까지 작성합니다. 최대 50자까지 작성을 합니다.</p>
          <p>
            간단한 설명이 들어가는 영역입니다. 최대 2줄까지 작성합니다. 설명이 들어가는 영역입니다. 설명이 들어가는
            영역입니다. 설명이
          </p>
          <div className="flex items-center gap-[4px]">
            <Image
              src={"/images/Rookeys.png"}
              width={40}
              height={40}
              className="rounded-full"
              alt="creator-image"
              placeholder="blur"
              blurDataURL="data:image/jepg;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII="
            />
            <p className="line-clamp-1">닉네임이 들어갈 영역입니다</p>
          </div>
        </article>
      </section>
      <MobilePlayNowButton />
    </section>
  )
}
