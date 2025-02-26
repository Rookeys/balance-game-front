"use client"

import { useGetMyGameListInfinite } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { useSession } from "next-auth/react"

export default function InfiniteScrollClient() {
  const { data: session } = useSession()
  console.log("session", session)
  const { data, fetchNextPage } = useGetMyGameListInfinite(undefined, {
    query: {
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const lastItem = lastPage.content?.[lastPage.content.length - 1]
        return lastItem ? lastItem.roomId : undefined
      }
    }
  })

  return (
    <section className="flex flex-col gap-[20px]">
      {data?.pages.map((page) => page.content?.map((game) => <p key={game.roomId}>{game.title}</p>))}
      {/* {data?.pages.flatMap((page) => page.content || []).map((game) => <p key={game.roomId}>{game.title}</p>)} */}
      <button onClick={() => fetchNextPage()}>다음</button>
    </section>
  )
}
