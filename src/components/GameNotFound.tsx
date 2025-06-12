"use client"

import Image from "next/image"
import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"

interface Params {
  keyword?: string | null
}

export default function GameNotFound({ keyword }: Params) {
  const router = useRouter()
  return (
    <section className="flex w-full flex-col items-center bg-fill-normal py-[60px]">
      <Image src={"/images/character/pixy_empty.webp"} width={80} height={80} alt="not-found-thumbnail" />
      <p className="mb-[20px] mt-[12px] text-body2-regular text-label-neutral">
        <span className="text-primary-hover">{keyword ?? ""}</span>에 해당하는 월드컵을 찾지 못했어요
      </p>
      <Button className="px-[28px] py-[12px]" onClick={() => router.push("/")}>
        다른 월드컵 보기
      </Button>
    </section>
  )
}
