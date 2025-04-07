"use client"

import { useGetResourceList } from "@/app/(routes)/game-create/[id]/resources/hooks/useGetResourceList"
import { Pagination } from "@/components/Pagination"
import useResizeHandler from "@/hooks/useResizeHandler"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { cn } from "@/utils/cn"
import { Square, SquareCheck } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import ResourceForm from "./ResourceForm"
import { handleSelectAllToggle } from "@/app/(routes)/game-create/[id]/resources/utils/selectAllResource"

export default function ResourceFormWrapper() {
  const searchParams = useSearchParams()
  const windowWidth = useResizeHandler()
  const router = useRouter()
  const { data, page } = useGetResourceList()

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("page", newPage.toString())
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  const { isAllSelected } = useSelectedResourceIdStore()

  const tableBaseClassName = "rounded-[8px] hidden md:grid md:grid-cols-[repeat(20,minmax(0,1fr))]"

  return (
    <>
      <article className="md:rounded-[16px] md:border md:px-[16px] md:py-[20px]">
        {/* Header */}
        <div className={cn("h-[80px] overflow-hidden", tableBaseClassName)}>
          <button
            className="col-span-1 flex items-center justify-center bg-gray-10"
            onClick={() => handleSelectAllToggle(data?.content)}
          >
            {isAllSelected(data?.content ?? []) ? <SquareCheck /> : <Square />}
          </button>
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
            indexNum={index + 1 + (page - 1) * 10}
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
