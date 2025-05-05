"use client"

import { useGetResultRankingUsingPage } from "@/api/orval/client/game-results-controller/game-results-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { useParams, useSearchParams } from "next/navigation"
import TabletResourceItem from "./TabletResourceItem"
import ResourceNotFound from "@/components/ResourceNotFound"

export default function TabletResources() {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const sort = searchParams.get("sort") || GetResultRankingSortType.WIN_RATE_DESC
  const keyword = searchParams.get("keyword") || ""
  const page = Number(searchParams.get("page")) || 1

  const { data: resources } = useGetResultRankingUsingPage(Number(id), {
    sortType: sort as GetResultRankingSortType,
    title: keyword,
    size: 10,
    page
  })

  return (
    <section className="flex flex-col">
      {resources?.content && resources.content.length > 0 ? (
        resources.content.map((resource, index) => (
          <TabletResourceItem key={resource.resourceId} {...resource} index={index} />
        ))
      ) : (
        <ResourceNotFound keyword={keyword} />
      )}
    </section>
  )
}
