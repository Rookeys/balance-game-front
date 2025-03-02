"use client"

import { useGetResultRankingInfinite } from "@/api/orval/client/game-results-controller/game-results-controller"
import ResourceItem from "@/components/ResourceItem"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function RankingPageClient() {
  const { id } = useParams()
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetResultRankingInfinite(
    Number(id),
    undefined,
    {
      query: {
        initialData: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.resourceId : undefined
        }
      }
    }
  )

  console.log("data", data)

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
    <section className="relative flex flex-col gap-[80px]">
      {data?.pages.map((page) =>
        page.content?.map((resource) => (
          <article key={resource.resourceId} className="relative flex items-center gap-[20px]">
            <section className="w-full max-w-[300px]">
              <ResourceItem content={resource.content} type={resource.type} />
            </section>
            <div className="flex flex-col gap-[20px]">
              <p>{resource.title}</p>
              <p>{(((resource.winningNums || 0) / (resource.totalPlayNums || 1)) * 100).toFixed(2)} %</p>
            </div>
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
