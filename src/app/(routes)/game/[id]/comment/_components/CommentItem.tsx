"use client"

import { ChevronDownIcon, ChevronUpIcon, MessageSquare, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import CommentSocialAction from "./CommentSocialAction"
import InputText from "@/components/form/inputText/InputText"
import ReplyItem from "./ReplyItem"

export default function CommentItem() {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false)
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
        <button className="flex items-center gap-[4px]" onClick={() => setIsOpenReply((prev) => !prev)}>
          <MessageSquare size={20} />
          <p>대댓글 2</p>
          {isOpenReply ? <ChevronDownIcon size={20} /> : <ChevronUpIcon size={20} />}
        </button>
      </div>
      {isOpenReply && (
        <section className="ms-[48px] flex flex-col gap-[20px]">
          <InputText id="test" className="w-full" inputClassName="h-[80px]" />
          <ReplyItem />
        </section>
      )}
    </section>
  )
}
