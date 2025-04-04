import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { cn } from "@/utils/cn"
import { Square } from "lucide-react"
import ResourceTableDesktopContents from "./ResourceTableDesktopContents"

interface Params {
  resources?: GameResourceResponse[]
}

export default function ResourceTableDesktop({ resources }: Params) {
  const tableBaseClassName = "rounded-[8px] grid grid-cols-[repeat(20,minmax(0,1fr))]"
  return (
    <article className="rounded-[16px] border px-[16px] py-[20px]">
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
      {resources?.map((resource, i) => (
        <ResourceTableDesktopContents
          key={resource.resourceId}
          resource={resource}
          indexNum={i + 1}
          tableBaseClassName={tableBaseClassName}
        />
      ))}
    </article>
  )
}
