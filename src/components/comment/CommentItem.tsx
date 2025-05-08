"use client"

import { useGetChildrenCommentsByGameResourceInfinite } from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import { GameResourceParentCommentResponse } from "@/api/orval/model/gameResourceParentCommentResponse"
import ResourceCommentAndReplyForm from "@/components/comment/ResourceCommentAndReplyForm"
import { COLORS } from "@/styles/theme/colors"
import { convertUtcToKoreaDayTime } from "@/utils/dayjsWithExtends"
import { ChevronDownIcon, ChevronUpIcon, MessageSquare } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import CommentSocialAction from "./CommentSocialAction"
import ReplyItem from "./ReplyItem"

// * GameResourceParentCommentResponse 로 설정한이유
// * 댓글 중 가장 큰 범위의 타입을 가지고있음 (겹치지않는 부분들은 optional type)

interface Params extends GameResourceParentCommentResponse {
  propResourceId?: number
}

export default function CommentItem({ propResourceId, ...props }: Params) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false)

  const { id, resourceId: paramResourceId } = useParams()

  const resourceId = propResourceId ?? Number(paramResourceId)

  const {
    data: replyData,
    isLoading
    // fetchNextPage,
    // hasNextPage,
    // isFetchingNextPage
  } = useGetChildrenCommentsByGameResourceInfinite(Number(id), Number(resourceId), props.commentId!, undefined, {
    query: {
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const lastItem = lastPage.content?.[lastPage.content.length - 1]
        return lastPage.hasNext ? lastItem?.commentId : undefined
      },
      enabled: !!isOpenReply && !!props.commentId && !!(props?.children && props?.children > 0)
    }
  })

  return (
    <section className="flex flex-col gap-[8px] md:gap-[12px]">
      <article className="flex items-center justify-between">
        <article className="flex items-center gap-[8px]">
          <Image
            src={props.profileImageUrl ?? "/images/Rookeys.png"}
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
            {/* <p className="text-sm text-gray-500">2025.03.29 22:30</p> */}
          </div>
        </article>
        <div className="flex-shrink-0 self-start">
          <CommentSocialAction commentId={props.commentId} isMine={props.existsMine} resourceId={resourceId} />
        </div>
      </article>
      <p className="ms-[48px] text-label-regular text-label-normal md:text-body2-regular">{props?.comment}</p>
      <div className="ms-[48px] flex items-center gap-[12px] text-label-alternative">
        {/* <button className="flex items-center gap-[4px]" onClick={() => alert("좋아요")}>
          <ThumbsUp size={20} color={COLORS.NEUTRAL_600} />
          <p className="text-caption1-regular md:text-label-regular">{props?.like}</p>
        </button> */}
        <button className="flex items-center gap-[4px]" onClick={() => setIsOpenReply((prev) => !prev)}>
          <MessageSquare size={20} color={COLORS.NEUTRAL_600} />
          <p className="text-caption1-regular md:text-label-regular">대댓글 {props?.children || 0}</p>
          {isOpenReply ? <ChevronDownIcon size={20} /> : <ChevronUpIcon size={20} />}
        </button>
      </div>
      {isOpenReply && (
        <section className="ms-[48px] flex flex-col gap-[20px]">
          {/* <TextareaWithSubmit
            id="test"
            disableEnter
            maxLength={500}
            inputClassName="!min-h-[100px]"
            placeholder="해당 콘텐츠와 관련된 댓글을 작성해 주세요."
          /> */}
          <ResourceCommentAndReplyForm parentId={props.commentId} resourceId={resourceId} />
          {isLoading && <section className="h-[100vh] w-full bg-red-50" />}
          {(replyData?.pages ?? []).flatMap(
            (page) =>
              page.content?.map((reply) => (
                <ReplyItem key={reply.commentId} {...reply} resourceId={resourceId} parentId={props.commentId} />
              )) ?? []
          )}
        </section>
      )}
    </section>
  )
}
