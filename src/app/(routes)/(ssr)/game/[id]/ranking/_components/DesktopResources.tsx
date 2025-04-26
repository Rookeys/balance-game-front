"use client"

import { useGetResultRankingUsingPage } from "@/api/orval/client/game-results-controller/game-results-controller"
import { GetResultRankingSortType } from "@/api/orval/model/getResultRankingSortType"
import { cn } from "@/utils/cn"
import { useParams, useSearchParams } from "next/navigation"
import DesktopResourceItem from "./DesktopResourceItem"

export default function DesktopResources() {
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
    <article className="flex flex-col rounded-[16px] border px-[16px] py-[20px]">
      {/* Header */}
      <div className={cn("flex h-[74px] overflow-hidden rounded-[8px] bg-gray-100")}>
        <div className="flex w-[64px] flex-shrink-0 items-center justify-center">
          <p>순위</p>
        </div>
        <div className="center flex w-[112px] flex-shrink-0 items-center px-[16px]">
          <p>썸네일</p>
        </div>
        <div className="flex w-full items-center px-[16px]">
          <p>이름</p>
        </div>
        <div className="flex w-full items-center px-[16px]">
          <p>승률</p>
        </div>
      </div>
      {/* Contents */}
      {resources?.content?.map((resource, index) => (
        <DesktopResourceItem key={resource.resourceId} index={index} {...resource} />
      ))}
    </article>
  )
}
