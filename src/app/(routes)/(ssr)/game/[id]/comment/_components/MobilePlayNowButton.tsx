"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function MobilePlayNowButton() {
  const { id } = useParams()
  return (
    <Link
      href={`/game/${id}`}
      className="rounded-[12px] bg-gray-100 px-[16px] py-[20px] md:hidden"
      // onClick={() => router.push(`/game/${id}`)}
    >
      <div className="flex w-full items-center justify-between">
        <div className="text-start">
          <p>이 콘텐츠가 왜 인기 있는지 궁금하다면?</p>
          <p>지금 바로 플레이해 보세요!</p>
        </div>
        <Image src={"/images/Rookeys.png"} alt="" width={60} height={60} />
      </div>
    </Link>
  )
}
