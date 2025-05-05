"use client"
import { useGetMyGameListInfinite } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import MyGameNotFound from "./MyGameNotFound"

export default function MyCreatedGameList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMyGameListInfinite(undefined, {
    query: {
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const lastItem = lastPage.content?.[lastPage.content.length - 1]
        return lastPage.hasNext ? lastItem?.roomId : undefined
      }
    }
  })

  const { ref, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage])

  if (isLoading) return <section className="h-[100vh] bg-red-50" />

  if (!isLoading && data?.pages[0].totalElements === 0)
    return (
      <section className="flex flex-col gap-[12px]">
        <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">
          내가 만든 월드컵 <span className="text-primary-hover">0</span>개
        </p>
        <MyGameNotFound />
      </section>
    )

  return (
    <section className="flex flex-col gap-[12px]">
      <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">
        내가 만든 월드컵 <span className="text-primary-hover">{data?.pages[0].totalElements ?? 0}</span>개
      </p>
      <article className="relative grid w-full grid-cols-2 gap-x-[16px] gap-y-[16px] md:grid-cols-4 md:gap-x-[24px] md:gap-y-[40px]">
        {(data?.pages ?? []).flatMap(
          (page) =>
            page.content?.map((game) => (
              <GameThumbnailSimpleCard key={game.roomId} fixedSize={false} isMine {...game} />
            )) ?? []
        )}
        {!isFetchingNextPage && (
          <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full opacity-0" />
        )}
      </article>
    </section>
  )
}
