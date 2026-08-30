"use client"

import { useGetMainGameListInfinite } from "@/api/orval/client/main-page-controller/main-page-controller"
import { GetMainGameListSortType } from "@/api/orval/model/getMainGameListSortType"
import { CustomPageImplGameListResponse } from "@/api/orval/model/customPageImplGameListResponse"
import Skeleton from "@/components/Skeleton"
import { GetMainGameListCategoryWithViewAll } from "@/types/categoryType"
import { getCategoryLabel } from "@/utils/getCategoryLabel"
import { useParams, useSearchParams } from "next/navigation"

interface Props {
  initialGames?: CustomPageImplGameListResponse
}

export default function Title({ initialGames }: Props) {
  const { category } = useParams()
  const searchParams = useSearchParams()

  const sort = searchParams.get("sort") ?? GetMainGameListSortType.RECENT

  const formattedCategory = category?.toString()?.toUpperCase() as GetMainGameListCategoryWithViewAll | undefined

  const { data, isLoading } = useGetMainGameListInfinite(
    {
      category: formattedCategory === GetMainGameListCategoryWithViewAll.VIEW_ALL ? undefined : formattedCategory,
      sortType: sort as GetMainGameListSortType
    },
    {
      query: {
        initialPageParam: undefined,
        getNextPageParam: (lastPage) => {
          const lastItem = lastPage.content?.[lastPage.content.length - 1]
          return lastPage.hasNext ? lastItem?.roomId : undefined
        },
        ...(initialGames && sort === GetMainGameListSortType.RECENT
          ? { initialData: () => ({ pages: [initialGames], pageParams: [undefined] }) }
          : {})
      }
    }
  )

  if (isLoading) {
    return (
      <div className="flex items-center font-sb-aggro-medium text-heading-4 md:text-heading-3">
        <Skeleton className="h-[32px] w-[168px]" />
      </div>
    )
  }

  return (
    <p className="flex items-center font-sb-aggro-medium text-heading-4 md:text-heading-3">
      {getCategoryLabel(formattedCategory)} 월드컵&nbsp;
      <span className="text-primary-hover">{data?.pages[0].totalElements ?? 0}</span>개
    </p>
  )
}
