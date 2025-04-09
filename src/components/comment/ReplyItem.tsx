"use client"

import CommentSocialAction from "@/components/comment/CommentSocialAction"
import { ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function ReplyItem() {
  return (
    <section className="flex flex-col gap-[8px] md:gap-[12px]">
      <article className="flex items-center justify-between">
        <article className="flex items-center gap-[8px]">
          <Image src={"/images/Rookeys.png"} width={40} height={40} className="rounded-full" alt="프로필 이미지" />
          <div>
            <div className="flex items-center gap-[8px]">
              <p>닉네임이 들어갈 영역입니다</p>
              <div className="flex-shrink-0 self-start rounded-full bg-gray-10 px-[8px] py-[2px]">제작자</div>
            </div>
            <p className="text-sm text-gray-500">2025.03.29 22:30</p>
          </div>
        </article>
        <div className="flex-shrink-0 self-start">
          <CommentSocialAction />
        </div>
      </article>
      <p className="ms-[48px]">댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용댓글내용</p>
      <div className="ms-[48px] flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={() => alert("좋아요")}>
          <ThumbsUp size={20} />
          <p>12</p>
        </button>
      </div>
    </section>
  )
}
