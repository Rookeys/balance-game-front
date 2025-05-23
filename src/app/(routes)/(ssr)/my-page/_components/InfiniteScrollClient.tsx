"use client"

import { useGetMyGameListInfinite } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function InfiniteScrollClient() {
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

  return (
    <section className="relative flex flex-col gap-[80px]">
      {data?.pages.map((page) => page.content?.map((game) => <p key={game?.roomId}>{game?.title}</p>))}
      {!isFetchingNextPage && (
        <div ref={ref} className="pointer-events-none absolute bottom-[200px] h-[4px] w-full opacity-0" />
      )}
      <section>{isFetchingNextPage && <p>Loading...</p>}</section>
    </section>
  )
}

// ;<section>
//   {isFetchingNextPage ? (
//     <p>Loading...</p>
//   ) : hasNextPage ? (
//     <p>-{/* 스크롤을 더 내려주세요 */}</p>
//   ) : (
//     <p>데이터가 더 이상 존재하지 않습니다.</p>
//   )}
// </section>
