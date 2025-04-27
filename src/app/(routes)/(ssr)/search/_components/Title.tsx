"use client"

import { useGetMainGameListInfinite } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { useSearchParams } from "next/navigation"

export default function Title() {
  const searchParams = useSearchParams()
  const keyword = searchParams.get("keyword")

  const sort = searchParams.get("sort") ?? GetMainGameListSortType.RECENT

  const { data } = useGetMainGameListInfinite(
    { title: keyword as string, sortType: sort as GetMainGameListSortType },
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

  return (
    <p className="flex items-center font-sb-aggro-medium text-heading-3">
      월드컵&nbsp;
      <span className="text-primary-hover">{data?.pages[0].totalElements ?? 0}</span>개
    </p>
  )
}
