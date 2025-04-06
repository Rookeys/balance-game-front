"use client"

import { useGetResources } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { cn } from "@/utils/cn"
import { Square } from "lucide-react"
import { useParams } from "next/navigation"
import ResourceForm from "./ResourceForm"

export default function ResourceFormWrapper() {
  const { id } = useParams()

  const { data } = useGetResources(Number(id), { size: 10 })
  // console.log("data", data?.content)

  const tableBaseClassName = "rounded-[8px] hidden md:grid md:grid-cols-[repeat(20,minmax(0,1fr))]"

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
    </>
  )
}
