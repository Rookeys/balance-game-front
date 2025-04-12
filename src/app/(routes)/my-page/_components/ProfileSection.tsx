"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection() {
  const { data: session } = useSession()
  return (
    <article className="flex flex-col gap-[12px]">
      <div className="flex items-start justify-between">
        <figure className="relative h-[60px] w-[60px] flex-shrink-0 md:h-[80px] md:w-[80px]">
          <Image src={session?.user.image ?? "/images/Rookeys.png"} alt="" fill />
        </figure>
        <Link
          className="inline-flex items-center justify-center rounded-[12px] bg-black px-[16px] py-[8px] text-white"
          href={"/my-page/edit"}
        >
          프로필 수정
        </Link>
      </div>
      <div>
        <p>닉네임이 들어갈 영역입니다</p>
        <p>{session?.user.email}</p>
      </div>
    </article>
  )
}
