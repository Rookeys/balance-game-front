"use client"

import { useGetResourceList } from "@/app/(routes)/(ssr)/game-create/[id]/resources/hooks/useGetResourceList"
import { handleSelectAllToggle } from "@/app/(routes)/(ssr)/game-create/[id]/resources/utils/selectAllResource"
import { Pagination } from "@/components/Pagination"
import ResourceNotFound from "@/components/ResourceNotFound"
import useResizeHandler from "@/hooks/useResizeHandler"
import CustomCheckIcon from "@/icons/CustomCheckIcon"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { COLORS } from "@/styles/theme/colors"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { cn } from "@/utils/cn"
import { Square } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import ResourceForm from "./ResourceForm"

export default function ResourceFormWrapper() {
  const searchParams = useSearchParams()
  const windowWidth = useResizeHandler()
  const router = useRouter()
  const { data, page } = useGetResourceList()

  const keyword = searchParams.get("keyword")

  const handlePageChange = (newPage: number) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("page", newPage.toString())
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  const { isAllSelected } = useSelectedResourceIdStore()

  const tableBaseClassName = "rounded-[8px] hidden lg:grid lg:grid-cols-[repeat(20,minmax(0,1fr))]"

  return (
    <>
      <article className="lg:rounded-[16px] lg:border lg:px-[16px] lg:py-[20px]">
        {/* Header */}
        <div
          className={cn(
            "flex h-[80px] overflow-hidden rounded-t-[12px] bg-fill-normal text-body2-bold text-label-normal",
            tableBaseClassName
          )}
        >
          <button
            className="col-span-1 flex items-center justify-center"
            onClick={() => handleSelectAllToggle(data?.content)}
          >
            {isAllSelected(data?.content ?? []) ? (
              <CustomCheckIcon className="rounded-[4px] bg-primary-normal p-[2px] text-white" size={16} />
            ) : (
              <Square color={COLORS.NEUTRAL_300} size={24} />
            )}
          </button>
          <div className="col-span-1 flex items-center justify-center">
            <p>No</p>
          </div>
          <div className="col-span-2 flex items-center justify-center">
            <p>유형</p>
          </div>
          <div className="col-span-3 flex items-center px-[16px]">
            <p>썸네일</p>
          </div>
          <div className="col-span-5 flex items-center px-[16px]">
            <p>이름</p>
          </div>
          <div className="col-span-5 flex items-center px-[16px]">
            <p>승률</p>
          </div>
          <div className="col-span-3 flex items-center px-[16px]" />
        </div>
        {/* Contents */}
        {data?.content?.length ? (
          data.content.map((resource, index) => (
            <ResourceForm
              key={resource.resourceId}
              resource={resource}
              tableBaseClassName={tableBaseClassName}
              indexNum={index + 1 + (page - 1) * 10}
            />
          ))
        ) : (
          <ResourceNotFound keyword={keyword} />
        )}
      </article>
      {!!data?.totalPages && (
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
