"use client"

import Filter from "@/components/Filter"
import PlayNowAndRankingSideBar from "@/components/sidebar/PlayNowAndRankingSideBar"
import { commentListFilters } from "@/constants/filters"

import { useGetParentCommentsByGameResourceInfinite } from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GetChildrenCommentsByGameResourceSortType } from "@/api/orval/model/getChildrenCommentsByGameResourceSortType"
import ReplyItem from "@/components/comment/ReplyItem"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import GameInformation from "./GameInformation"

export default function CommentPageClient() {
  const { id } = useParams()
  const searchParams = useSearchParams()

  const tab = searchParams.get("tab") ?? "all"
  const sort = searchParams.get("sort") ?? "RECENT"

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetParentCommentsByGameResourceInfinite(
      Number(id),
      { sortType: sort as GetChildrenCommentsByGameResourceSortType },
      {
        query: {
          initialPageParam: undefined,
          getNextPageParam: (lastPage) => {
            const lastItem = lastPage.content?.[lastPage.content.length - 1]
            return lastPage.hasNext ? lastItem?.commentId : undefined
          },
          enabled: tab === "all"
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

  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[60px]">
        <GameInformation />
        <div className="relative flex flex-col gap-[12px]">
          {isLoading && <section className="h-[100vh] w-full bg-red-50" />}
          <article className="flex items-center justify-between">
            <p>전체댓글 {data?.pages?.[0]?.totalElements ?? 0}</p>
            <Filter filters={commentListFilters} />
          </article>
          <TextareaWithSubmit
            id="test"
            disableEnter
            maxLength={500}
            inputClassName="!min-h-[100px]"
            placeholder="해당 콘텐츠와 관련된 댓글을 작성해 주세요."
          />
          {(data?.pages ?? []).flatMap(
            (page) => page.content?.map((comment) => <ReplyItem key={comment.commentId} {...comment} />) ?? []
          )}
          {!isFetchingNextPage && (
            <div
              ref={ref}
              className="pointer-events-none absolute bottom-[200px] h-[4px] w-full bg-red-50 opacity-100"
            />
          )}
        </div>
      </section>
      <PlayNowAndRankingSideBar />
    </section>
  )
}
