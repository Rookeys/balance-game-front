"use client"

import Image from "next/image"
import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"

export default function MyGameNotFound() {
  const router = useRouter()
  return (
    <section className="flex w-full flex-col items-center py-[60px]">
      <Image src={"/images/character/pixy_empty.webp"} width={80} height={80} alt="not-found-thumbnail" />
      <p className="mb-[20px] mt-[12px] text-body2-regular text-label-neutral">내가 만든 월드컵이 없어요</p>
      <Button className="px-[28px] py-[12px]" onClick={() => router.push("/game-create/new")}>
        월드컵 만들기
      </Button>
    </section>
  )
}
