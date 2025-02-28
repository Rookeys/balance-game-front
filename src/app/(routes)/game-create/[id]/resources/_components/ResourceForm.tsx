"use client"

import { useGetResourcesInfinite } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import dynamic from "next/dynamic"
import { useParams } from "next/navigation"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const ImageForm = dynamic(() => import("./resourceForm/ImageForm"))
const YoutubeForm = dynamic(() => import("./resourceForm/YoutubeForm"))

export default function ResourceForm() {
  const { id } = useParams()
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } = useGetResourcesInfinite(
    Number(id),
    undefined,
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.resourceId : undefined
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
    <section className="relative flex flex-col">
      {/* {mockData.map((data) =>
        data.type === "image" ? <ImageForm key={data.id} {...data} /> : <YoutubeForm key={data.id} {...data} />
      )} */}
      {data?.pages.map((page) =>
        page.content?.map((media) =>
          media?.type === "IMAGE" ? (
            <ImageForm key={media.resourceId} {...media} />
          ) : (
            <YoutubeForm key={media?.resourceId} {...media} />
          )
        )
      )}
      {!isFetchingNextPage && <div ref={ref} className="pointer-events-none absolute bottom-[400px] h-[4px] w-full" />}
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
