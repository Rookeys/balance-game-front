"use client"
import { useGetFollowCounts } from "@/api/orval/client/follow-controller/follow-controller"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection() {
  const { data: session } = useSession()
  const { data: followCounts, isPending } = useGetFollowCounts(
    { email: session?.user.email as string },
    { query: { enabled: !!session?.user.email } }
  )

  return (
    <article className="flex flex-col gap-[12px]">
      <article className="flex items-start justify-between">
        <figure className="relative h-[60px] w-[60px] flex-shrink-0 overflow-hidden rounded-full md:h-[80px] md:w-[80px]">
          <Image src={session?.user.image || "/images/character/pixy_profile.webp"} alt="profile-image" fill />
        </figure>
        <Link
          className="inline-flex items-center justify-center rounded-[8px] bg-fill-normal px-[20px] py-[10px] text-label-bold"
          href={"/my-page/edit"}
        >
          프로필 수정
        </Link>
      </article>
      <article>
        <p className="text-body2-bold">{session?.user.nickname}</p>
        <p className="text-label-regular text-label-alternative">{session?.user.email}</p>
        <div className="mt-[12px] flex h-[20px] items-center gap-[12px] text-label-medium text-label-alternative">
          {!isPending && (
            <>
              <p className="flex items-center gap-[4px]">
                <span>팔로워</span>
                <span>{followCounts?.followerCount}</span>
              </p>
              <p>|</p>
              <p className="flex items-center gap-[4px]">
                <span>팔로잉</span>
                <span>{followCounts?.followingCount}</span>
              </p>
            </>
          )}
        </div>
      </article>
    </article>
  )
}
