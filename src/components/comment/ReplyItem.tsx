"use client"

import { GameResourceChildrenCommentResponse } from "@/api/orval/model/gameResourceChildrenCommentResponse"
import CommentSocialAction from "@/components/comment/CommentSocialAction"
import { convertUtcToKoreaDayTime } from "@/utils/dayjsWithExtends"
import Image from "next/image"

interface Params extends GameResourceChildrenCommentResponse {
  resourceId?: number
  parentId?: number
}

export default function ReplyItem({ resourceId, parentId, ...props }: Params) {
  return (
    <section className="flex flex-col gap-[8px] md:gap-[12px]">
      <article className="flex items-center justify-between">
        <article className="flex items-center gap-[8px]">
          <Image
            src={props.profileImageUrl || "/images/character/pixy_profile.webp"}
            width={40}
            height={40}
            className="rounded-full"
            alt="프로필 이미지"
          />
          <div>
            <div className="flex items-center gap-[8px]">
              <p className="text-label-medium text-label-neutral">{props.nickname}</p>
              {props.existsWriter && (
                <div className="flex-shrink-0 self-start rounded-full bg-accent-alternative px-[8px] py-[2px] text-caption1-regular text-accent-on-accent">
                  제작자
                </div>
              )}
            </div>
            <p className="text-caption1-regular text-label-alternative">
              {convertUtcToKoreaDayTime(props.createdDateTime)}
            </p>
          </div>
        </article>
        <div className="flex-shrink-0 self-start">
          <CommentSocialAction
            commentId={props.commentId}
            isMine={props.existsMine}
            resourceId={resourceId}
            parentId={parentId}
          />
        </div>
      </article>
      <p className="ms-[48px] text-label-regular text-label-normal md:text-body2-regular">{props?.comment}</p>
      <div className="ms-[48px] flex items-center gap-[12px]">
        {/* <button className="flex items-center gap-[4px]" onClick={() => alert("좋아요")}>
          <ThumbsUp size={20} color={COLORS.NEUTRAL_600} />
          <p className="text-caption1-regular text-label-alternative md:text-label-regular">{props?.like}</p>
        </button> */}
      </div>
    </section>
  )
}
