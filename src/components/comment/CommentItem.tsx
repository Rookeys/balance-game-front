"use client"

import { useGetChildrenCommentsByGameResourceInfinite } from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import { GameResourceParentCommentResponse } from "@/api/orval/model/gameResourceParentCommentResponse"
import ResourceCommentAndReplyForm from "@/app/(routes)/game/[id]/results/[resourceId]/_components/ResourceCommentAndReplyForm"
import { convertUtcToKoreaDaTime } from "@/utils/dayjsWithExtends"
import { ChevronDownIcon, ChevronUpIcon, MessageSquare, ThumbsUp } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import CommentSocialAction from "./CommentSocialAction"
import ReplyItem from "./ReplyItem"

// * GameResourceParentCommentResponse 로 설정한이유
// * 댓글 중 가장 큰 범위의 타입을 가지고있음 (겹치지않는 부분들은 optional type)
export default function CommentItem(props: GameResourceParentCommentResponse) {
  const [isOpenReply, setIsOpenReply] = useState<boolean>(false)

  const { id, resourceId } = useParams()

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
          <Image src={"/images/Rookeys.png"} width={40} height={40} className="rounded-full" alt="프로필 이미지" />
          <div>
            <div className="flex items-center gap-[8px]">
              <p>{props.nickname}</p>
              {props.existsWriter && (
                <div className="flex-shrink-0 self-start rounded-full bg-gray-10 px-[8px] py-[2px]">제작자</div>
              )}
            </div>
            <p className="font-[12px] text-gray-500">{convertUtcToKoreaDaTime(props.createdDateTime)}</p>
            {/* <p className="text-sm text-gray-500">2025.03.29 22:30</p> */}
          </div>
        </article>
        <div className="flex-shrink-0 self-start">
          <CommentSocialAction />
        </div>
      </article>
      <p className="ms-[48px]">{props?.comment}</p>
      <div className="ms-[48px] flex items-center gap-[12px]">
        <button className="flex items-center gap-[4px]" onClick={() => alert("좋아요")}>
          <ThumbsUp size={20} />
          <p>{props?.like}</p>
        </button>
        <button className="flex items-center gap-[4px]" onClick={() => setIsOpenReply((prev) => !prev)}>
          <MessageSquare size={20} />
          <p>{props?.children || 0}</p>
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
          <ResourceCommentAndReplyForm parentId={props.commentId} />
          {isLoading && <section className="h-[100vh] w-full bg-red-50" />}
          {(replyData?.pages ?? []).flatMap(
            (page) => page.content?.map((reply) => <ReplyItem key={reply.commentId} {...reply} />) ?? []
          )}
        </section>
      )}
    </section>
  )
}
