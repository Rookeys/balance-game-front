"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection() {
  const { data: session } = useSession()
  return (
    <article className="flex flex-col gap-[12px]">
      <div className="flex items-start justify-between">
        <figure className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
          <Image src={session?.user.image || "/images/character/pixy_profile.webp"} alt="" fill />
        </figure>
        <Link
          className="inline-flex items-center justify-center rounded-[8px] bg-fill-normal px-[20px] py-[10px] text-label-bold"
          href={"/my-page/edit"}
        >
          프로필 수정
        </Link>
      </div>
      <div>
        <p className="text-body2-bold">{session?.user.nickname}</p>
        <p className="text-label-regular text-label-alternative">{session?.user.email}</p>
      </div>
    </article>
  )
}
