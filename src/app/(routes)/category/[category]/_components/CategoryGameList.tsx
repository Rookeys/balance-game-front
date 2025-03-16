"use client"
import { useGetMainGameListInfinite } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListCategory } from "@/api/orval/model/getMainGameListCategory"
import GameThumbnailSimpleCard from "@/components/gameThumbnailCard/GameThumbnailSimpleCard"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function CategoryGameList() {
  const { category } = useParams()

  const formattedCategory = category?.toString()?.toUpperCase() as GetMainGameListCategory | undefined

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMainGameListInfinite(
    { category: formattedCategory },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.roomId : undefined
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

  if (isLoading) return <section className="h-[100vh] bg-red-50" />

  return (
    <section className="relative grid grid-cols-2 gap-x-[20px] gap-y-[20px] md:grid-cols-4 md:gap-y-[40px]">
      {data?.pages?.map((page) =>
        page.content?.map((game, index) => <GameThumbnailSimpleCard key={index} fixedSize={false} {...game} />)
      )}
      {!isFetchingNextPage && (
        <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full opacity-0" />
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
