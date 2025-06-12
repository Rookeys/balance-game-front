"use client"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Params {
  text?: string
}

export default function MobilePlayNowButton({ text = "지금 바로 플레이해 보세요!" }: Params) {
  const { id } = useParams()
  return (
    <Link
      href={`/game/${id}`}
      className="rounded-[12px] bg-fill-normal px-[16px] py-[20px] md:hidden"
      // onClick={() => router.push(`/game/${id}`)}
    >
      <div className="flex w-full items-center justify-between">
        <div className="whitespace-pre-line text-start font-sb-aggro-medium text-heading-5">{text}</div>
        <Image src={"/images/icons/trophy_3d.webp"} alt="trophy-icon" width={60} height={60} />
      </div>
    </Link>
  )
}
