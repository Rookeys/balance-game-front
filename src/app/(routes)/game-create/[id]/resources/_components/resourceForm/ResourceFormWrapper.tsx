"use client"

import { useGetResourcesUsingPage } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Pagination } from "@/components/Pagination"
import { cn } from "@/utils/cn"
import { keepPreviousData } from "@tanstack/react-query"
import { Square } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import ResourceForm from "./ResourceForm"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"

export default function ResourceFormWrapper() {
  const { id } = useParams()

  const searchParams = useSearchParams()
  const windowWidth = useResizeHandler()

  const pageParam = searchParams.get("page") || 1
  const keywordParam = searchParams.get("keyword") || ""

  const page = Number(pageParam)

  const { data } = useGetResourcesUsingPage(
    Number(id),
    { page: page, size: 10, title: keywordParam },
    { query: { placeholderData: keepPreviousData } }
  )

  const router = useRouter()

  const tableBaseClassName = "rounded-[8px] hidden md:grid md:grid-cols-[repeat(20,minmax(0,1fr))]"

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("page", newPage.toString())
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  return (
    <>
      <article className="md:rounded-[16px] md:border md:px-[16px] md:py-[20px]">
        {/* Header */}
        <div className={cn("h-[80px] overflow-hidden", tableBaseClassName)}>
          <div className="col-span-1 flex items-center justify-center bg-gray-10">
            <Square />
          </div>
          <div className="col-span-1 flex items-center justify-center bg-blue-10">
            <p>No</p>
          </div>
          <div className="col-span-2 flex items-center justify-center bg-red-10">
            <p>유형</p>
          </div>
          <div className="col-span-3 flex items-center bg-yellow-10 px-[16px]">
            <p>썸네일</p>
          </div>
          <div className="col-span-5 flex items-center bg-blue-10 px-[16px]">
            <p>이름</p>
          </div>
          <div className="col-span-5 flex items-center bg-red-10 px-[16px]">
            <p>승률</p>
          </div>
          <div className="col-span-3 flex items-center bg-red-10 px-[16px]" />
        </div>
        {/* Contents */}
        {data?.content?.map((resource, index) => (
          <ResourceForm
            key={resource.resourceId}
            resource={resource}
            tableBaseClassName={tableBaseClassName}
            indexNum={index + 1}
          />
        ))}
      </article>
      {data?.totalPages && (
        <Pagination
          currentPage={page}
          totalPages={data?.totalPages}
          onPageChange={handlePageChange}
          pageRangeDisplayed={windowWidth > SCREEN_SIZE.md ? 10 : 5}
        />
      )}
    </>
  )
}
