"use client"

import Filter from "@/components/Filter"
import PlayNowAndRankingSideBar from "@/components/sidebar/PlayNowAndRankingSideBar"
import { commentListFilters } from "@/constants/filters"

import { useGetCommentsByGameResultInfinite } from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GetCommentsByGameResultSortType } from "@/api/orval/model/getCommentsByGameResultSortType"
import ReplyItem from "@/components/comment/ReplyItem"
import { useParams, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import GameCommentForm from "./GameCommentForm"
import GameInformation from "./GameInformation"

export default function CommentPageClient() {
  const { id } = useParams()
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort") ?? GetCommentsByGameResultSortType.RECENT

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetCommentsByGameResultInfinite(
    Number(id),
    { sortType: sort as GetCommentsByGameResultSortType },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.commentId : undefined
        }
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
          <GameCommentForm />
          {(data?.pages ?? []).flatMap(
            (page) => page.content?.map((comment) => <ReplyItem key={comment.commentId} {...comment} />) ?? []
          )}
          {!isFetchingNextPage && (
            <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full opacity-0" />
          )}
        </div>
      </section>
      <PlayNowAndRankingSideBar />
    </section>
  )
}
