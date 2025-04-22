"use client"

import { GameResourceChildrenCommentResponse } from "@/api/orval/model/gameResourceChildrenCommentResponse"
import CommentSocialAction from "@/components/comment/CommentSocialAction"
import { convertUtcToKoreaDaTime } from "@/utils/dayjsWithExtends"
import { ThumbsUp } from "lucide-react"
import Image from "next/image"

export default function ReplyItem(props: GameResourceChildrenCommentResponse) {
  return (
    <section className="flex flex-col gap-[8px] md:gap-[12px]">
      <article className="flex items-center justify-between">
        <article className="flex items-center gap-[8px]">
          <Image src={"/images/Rookeys.png"} width={40} height={40} className="rounded-full" alt="프로필 이미지" />
          <div>
            <div className="flex items-center gap-[8px]">
              <p>{props.nickname}</p>
              <div className="flex-shrink-0 self-start rounded-full bg-gray-10 px-[8px] py-[2px]">제작자</div>
            </div>
            <p className="font-[12px] text-gray-500">{convertUtcToKoreaDaTime(props.createdDateTime)}</p>
          </div>
        </article>
        <div className="flex-shrink-0 self-start">
          <CommentSocialAction />
        </div>
      </article>
      <p className="ms-[48px]">{props.comment}</p>
      <div className="ms-[48px] flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={() => alert("좋아요")}>
          <ThumbsUp size={20} />
          <p>{props.like}</p>
        </button>
      </div>
    </section>
  )
}
