"use client"

import { useContinuePlayRoom } from "@/api/orval/client/game-play-controller/game-play-controller"
import { useGetParentCommentsByGameResourceInfinite } from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import { GetParentCommentsByGameResourceSortType } from "@/api/orval/model/getParentCommentsByGameResourceSortType"
import { Button } from "@/components/Button"
import CommentItem from "@/components/comment/CommentItem"
import ResourceCommentAndReplyForm from "@/components/comment/ResourceCommentAndReplyForm"
import CommentNotFound from "@/components/CommentNotFound"
import Filter from "@/components/Filter"
import TabBar, { TabBarItem } from "@/components/TabBar"
import { commentListFilters } from "@/constants/filters"
import { cn } from "@/utils/cn"
import { offset } from "@floating-ui/dom"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { Tooltip } from "react-tooltip"

interface Params {
  playId: number
}

export default function CommentSection({ playId }: Params) {
  const { id } = useParams()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [commentTarget, setCommentTarget] = useState<1 | 2>(1)
  const [sort, setSort] = useState<GetParentCommentsByGameResourceSortType>()

  const { data: gamePlayData } = useContinuePlayRoom(Number(id), playId)

  const resourceId =
    commentTarget === 1
      ? Number(gamePlayData?.leftResource?.resourceId)
      : Number(gamePlayData?.rightResource?.resourceId)

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetParentCommentsByGameResourceInfinite(
      Number(id),
      resourceId,
      { sortType: sort as GetParentCommentsByGameResourceSortType },
      {
        query: {
          initialPageParam: undefined,
          getNextPageParam: (lastPage) => {
            const lastItem = lastPage.content?.[lastPage.content.length - 1]
            return lastPage.hasNext ? lastItem?.commentId : undefined
          },
          enabled: isOpen
        }
      }
    )

  const { ref, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  const tabItems: TabBarItem[] = [
    {
      value: 1,
      label: gamePlayData?.leftResource?.title || "왼쪽 리소스",
      onClick: () => setCommentTarget(1)
    },
    {
      value: 2,
      label: gamePlayData?.rightResource?.title || "오른쪽 리소스",
      onClick: () => setCommentTarget(2)
    }
  ]

  const comments = (data?.pages ?? []).flatMap((page) => page.content ?? [])

  return (
    <>
      {isOpen ? (
        <article className="relative flex flex-col gap-[20px]">
          <TabBar currentValue={commentTarget} items={tabItems} />
          {isLoading && <section className="h-[100vh] w-full bg-red-50" />}
          <article className="flex items-center justify-between">
            <p className="text-body2-bold text-label-normal">댓글 {data?.pages?.[0]?.totalElements ?? 0}</p>
            <Filter
              filters={commentListFilters}
              onClick={(sort) => setSort(sort as GetParentCommentsByGameResourceSortType)}
            />
          </article>
          <ResourceCommentAndReplyForm propResourceId={resourceId} />
          {/* {(data?.pages ?? []).flatMap(
            (page) =>
              page.content?.map((comment) => (
                <CommentItem key={comment.commentId} propResourceId={resourceId} {...comment} />
              )) ?? []
          )} */}
          {comments.length > 0 ? (
            comments.map((comment) => <CommentItem key={comment.commentId} propResourceId={resourceId} {...comment} />)
          ) : (
            <CommentNotFound />
          )}
          {!isFetchingNextPage && (
            <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full opacity-0" />
          )}
        </article>
      ) : (
        <>
          <Button data-tooltip-id={"comment-button"} className="self-end" onClick={() => setIsOpen(true)}>
            댓글 보기
          </Button>
          <Tooltip
            id={"comment-button"}
            className={cn("!rounded-[8px] !bg-label-strong !px-[12px] !py-[8px]")}
            isOpen={true}
            place="left"
            middlewares={[offset(10)]}
          >
            <section className="flex items-center gap-[8px]">
              <p className="text-label-regular text-background">
                무엇을 골라야할지 모르겠다면
                <br />
                댓글을 확인하고 결정해 보세요!
              </p>
            </section>
          </Tooltip>
        </>
      )}
    </>
  )
}
