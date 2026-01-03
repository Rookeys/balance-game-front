"use client"
import { useGetResourcesUsingPage } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { GetResourcesUsingPageSortType } from "@/api/orval/model/getResourcesUsingPageSortType"
import { keepPreviousData } from "@tanstack/react-query"
import { useParams, useSearchParams } from "next/navigation"

export function useGetResourceList() {
  const { id } = useParams()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get("page")) || 1
  const keywordParam = searchParams.get("keyword") || ""
  const sortParam = searchParams.get("sort") || ""

  const queryParams = {
    page,
    size: 10,
    title: keywordParam,
    sortType: sortParam as GetResourcesUsingPageSortType
  }

  const { data, isLoading, isError } = useGetResourcesUsingPage(Number(id), queryParams, {
    query: {
      placeholderData: keepPreviousData
    }
  })

  return {
    data,
    isLoading,
    isError,
    page,
    keyword: keywordParam,
    sort: sortParam
  }
}
