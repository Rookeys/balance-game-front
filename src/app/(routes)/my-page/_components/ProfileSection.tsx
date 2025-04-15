"use client"
import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"

export default function ProfileSection() {
  const { data: session } = useSession()
  return (
    <article className="flex flex-col gap-[12px]">
      {/* <button className="relative bg-[url('/images/playButtonWrapper.png')] bg-[length:100%_100%] bg-center bg-no-repeat px-6 py-3 font-semibold text-white transition-opacity duration-500 ease-in-out hover:opacity-80 lg:bg-[url('/images/Rookeys.png')] lg:hover:opacity-80">
        테스트 버튼
      </button> */}
      {/* <motion.button
        whileHover={{ scale: 1.05, y: -2, backgroundColor: "#362f80" }}
        whileTap={{ scale: 0.95, y: 2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-fit rounded-full border-4 border-l-0 border-r-0 border-b-green border-t-red bg-blue-50 px-[12px] py-[8px] text-white shadow-md"
      >
        젤리 한번에 바꾸기
      </motion.button> */}
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
