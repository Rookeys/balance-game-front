"use client"
import { useGetParentCommentsByGameResource1Infinite } from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import { useGetResource } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useGetParentCommentsByGameResourceInfinite } from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GetChildrenCommentsByGameResourceSortType } from "@/api/orval/model/getChildrenCommentsByGameResourceSortType"
import { GetParentCommentsByGameResource1SortType } from "@/api/orval/model/getParentCommentsByGameResource1SortType"
import CommentItem from "@/components/comment/CommentItem"
import ReplyItem from "@/components/comment/ReplyItem"
import Filter from "@/components/Filter"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import TabBar, { TabBarItem } from "@/components/TabBar"
import { commentListFilters } from "@/constants/filters"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import PlayOtherGameAndRankingSideBar from "./PlayOtherGameAndRankingSideBar"
import ResourceInformation from "./ResourceInformation"

export default function GameResultPageClient() {
  const { id, resourceId } = useParams()
  const searchParams = useSearchParams()

  const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  const router = useRouter()

  const tab = searchParams.get("tab") ?? "all"
  const sort = searchParams.get("sort") ?? "RECENT"
  // const sort = searchParams.get("sort") ?? GetParentCommentsByGameResource1SortType.RECENT

  const {
    data: gameComments,
    isLoading: isLoadingGame,
    fetchNextPage: fetchNextPageGame,
    hasNextPage: hasNextPageGame,
    isFetchingNextPage: isFetchingNextPageGame
  } = useGetParentCommentsByGameResourceInfinite(
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

  const {
    data: resourceComments,
    isLoading: isLoadingResource,
    fetchNextPage: fetchNextPageResource,
    hasNextPage: hasNextPageResource,
    isFetchingNextPage: isFetchingNextPageResource
  } = useGetParentCommentsByGameResource1Infinite(
    Number(resourceId),
    { sortType: sort as GetParentCommentsByGameResource1SortType },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.commentId : undefined
        },
        enabled: tab !== "all"
      }
    }
  )

  // 선택적으로 현재 사용해야 할 데이터를 tab 값에 따라 결정
  const commentData = tab === "all" ? gameComments : resourceComments
  const isLoading = tab === "all" ? isLoadingGame : isLoadingResource
  const fetchNextPage = tab === "all" ? fetchNextPageGame : fetchNextPageResource
  const hasNextPage = tab === "all" ? hasNextPageGame : hasNextPageResource
  const isFetchingNextPage = tab === "all" ? isFetchingNextPageGame : isFetchingNextPageResource

  const { ref, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  const updateTab = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", value)
    router.push(`?${params.toString()}`)
  }

  const tabItems: TabBarItem[] = [
    {
      value: "all",
      label: "전체 댓글",
      onClick: () => updateTab("all")
    },
    {
      value: "resource",
      label: resourceData?.title ?? "",
      onClick: () => updateTab("resource")
    }
  ]

  // const { data: gameRoomData } = useGetGameDetails(Number(id))

  // const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  return (
    <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
      <section className="flex w-full flex-col gap-[28px] md:gap-[60px]">
        <ResourceInformation />
        <article className="flex flex-col gap-[20px]">
          <TabBar items={tabItems} currentValue={tab} />
          <div className="relative flex flex-col gap-[12px]">
            {isLoading && <section className="h-[100vh] w-full bg-red-50" />}
            <article className="flex items-center justify-between">
              <p>전체댓글 {commentData?.pages?.[0]?.totalElements ?? 0}</p>
              <Filter filters={commentListFilters} />
            </article>
            <TextareaWithSubmit
              id="test"
              disableEnter
              maxLength={500}
              inputClassName="!min-h-[100px]"
              placeholder="해당 콘텐츠와 관련된 댓글을 작성해 주세요."
            />
            {/* * 추 후 게임방 댓글에도 reply 가 생길 예정이지만, 아직은 리소스 댓글에만 추가되어 있으므로 tab === "resource" 로직이 들어있음 */}
            {(commentData?.pages ?? []).flatMap(
              (page) =>
                page.content?.map((comment) =>
                  tab === "resource" ? (
                    <CommentItem key={comment.commentId} {...comment} />
                  ) : (
                    <ReplyItem key={comment.commentId} {...comment} />
                  )
                ) ?? []
            )}
            {!isFetchingNextPage && (
              <div
                ref={ref}
                className="pointer-events-none absolute bottom-[200px] h-[4px] w-full bg-red-50 opacity-100"
              />
            )}
          </div>
        </article>
      </section>
      <PlayOtherGameAndRankingSideBar />
    </section>
  )
}
