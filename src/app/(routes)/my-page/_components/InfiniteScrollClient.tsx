"use client"

import { useGetMyGameListInfinite } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

export default function InfiniteScrollClient() {
  const { data: session } = useSession()
  console.log("session", session)

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetMyGameListInfinite(undefined, {
    query: {
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        return lastPage.hasNext ? lastPage.content?.[lastPage.content.length - 1].roomId : undefined
      }
    }
  })

  const { ref, inView } = useInView({
    threshold: 1
  })

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage, hasNextPage])

  return (
    <section className="flex flex-col gap-[20px]">
      {data?.pages.map((page) => page.content?.map((game) => <p key={game.roomId}>{game.title}</p>))}
      {/* {data?.pages.flatMap((page) => page.content || []).map((game) => <p key={game.roomId}>{game.title}</p>)} */}
      {/* <button onClick={() => fetchNextPage()}>다음</button> */}
      <section ref={ref}>
        {isFetchingNextPage ? (
          <p>로딩중...</p>
        ) : hasNextPage ? (
          <p>스크롤을 더 내려주세요</p>
        ) : (
          <p>데이터가 더 이상 존재하지 않습니다.</p>
        )}
      </section>
    </section>
  )
}
