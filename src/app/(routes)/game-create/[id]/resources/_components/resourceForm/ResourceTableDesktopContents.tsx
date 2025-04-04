import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import ProgressBar from "@/components/ProgressBar"
import { cn } from "@/utils/cn"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { Square, SquarePen, Trash2 } from "lucide-react"
import Image from "next/image"

interface Params {
  resource: GameResourceResponse
  indexNum: number
  tableBaseClassName?: string
}
export default function ResourceTableDesktopContents({ resource, indexNum, tableBaseClassName }: Params) {
  return (
    <section className={cn("h-[96px]", tableBaseClassName)} key={resource.resourceId}>
      <div className="col-span-1 flex items-center justify-center">
        <Square />
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <p>{indexNum}</p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <p className="rounded-[4px] bg-gray-10 px-[8px] py-[4px]">
          {resource.type === GameResourceResponseType.IMAGE ? "이미지" : "동영상"}
        </p>
      </div>
      <div className="col-span-3 flex items-center px-[16px] py-[16px]">
        <div className="relative h-full w-full rounded-[8px]">
          <Image
            src={
              resource?.type === GameResourceResponseType.LINK
                ? getYoutubeThumbnail(resource?.content)
                : (resource?.content ?? "/")
            }
            alt="thumbnail"
            // width={64}
            // height={64}
            fill
            className="mx-auto rounded-[8px]"
          />
        </div>
      </div>
      <div className="col-span-5 flex items-center px-[16px]">
        <p>{resource.title}</p>
      </div>
      <div className="col-span-5 flex items-center px-[16px]">
        <div className="flex w-full flex-col">
          <ProgressBar percent={10} needIndicator={false} />
          <div className="flex items-center justify-between">
            <p>{(((resource.winningNums || 0) / (resource.totalPlayNums || 1)) * 100).toFixed(2)} %</p>
            <p>{resource.winningNums}번 우승</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-wrap items-center gap-[8px] px-[16px]">
        <button className="h-[40px] w-[40px] rounded-[4px] bg-gray-10 p-[8px]">
          <SquarePen />
        </button>
        <button className="h-[40px] w-[40px] rounded-[4px] bg-gray-10 p-[8px]">
          <Trash2 />
        </button>
      </div>
    </section>
  )
}
