"use client"
import { Button } from "@/components/Button"
import Image from "next/image"

export default function MobilePlayNowButton() {
  return (
    <Button className="rounded-[12px] bg-gray-10 px-[16px] py-[20px] md:hidden">
      <div className="flex w-full items-center justify-between">
        <div className="text-start">
          <p>이 콘텐츠가 왜 인기 있는지 궁금하다면?</p>
          <p>지금 바로 플레이해 보세요!</p>
        </div>
        <Image src={"/images/Rookeys.png"} alt="" width={60} height={60} />
      </div>
    </Button>
  )
}
