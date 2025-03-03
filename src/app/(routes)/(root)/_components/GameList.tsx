"use client"

import { useGetResources1Infinite } from "@/api/orval/client/main-page-controller/main-page-controller"
import GameThumbnailCard from "@/components/gameThumbnail/GameThumbnailCard"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function GameList() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetResources1Infinite(undefined, {
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
  return (
    <section className="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
      {data?.pages.map((page) =>
        page.content?.map((game) => (
          <article key={game?.roomId}>
            <GameThumbnailCard {...game} />
          </article>
        ))
      )}
      {!isFetchingNextPage && (
        <div ref={ref} className="pointer-events-none absolute bottom-[400px] h-[4px] w-full opacity-0" />
      )}
      <section>
        {isFetchingNextPage ? (
          <p>로딩중...</p>
        ) : hasNextPage ? (
          <p>-{/* 스크롤을 더 내려주세요 */}</p>
        ) : (
          <p>데이터가 더 이상 존재하지 않습니다.</p>
        )}
      </section>
    </section>
  )
}
