import ProgressBar from "@/components/ProgressBar"
import { cn } from "@/utils/cn"
import { Square, SquarePen, Trash2 } from "lucide-react"
import Image from "next/image"

export default function ResourceTableDesktop() {
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
      <div className={cn("h-[96px]", tableBaseClassName)}>
        <div className="col-span-1 flex items-center justify-center">
          <Square />
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <p>n</p>
        </div>
        <div className="col-span-2 flex items-center justify-center">
          <p>유형</p>
        </div>
        <div className="col-span-3 flex items-center px-[16px] py-[16px]">
          <div className="relative h-full w-full rounded-[8px]">
            <Image
              src={"/images/Rookeys.png"}
              alt="thumbnail"
              // width={64}
              // height={64}
              fill
              className="mx-auto rounded-[8px] object-contain"
            />
          </div>
        </div>
        <div className="col-span-5 flex items-center px-[16px]">
          <p>리소스이름리소스이름리소스이름리소스이름</p>
        </div>
        <div className="col-span-5 flex items-center px-[16px]">
          <div className="flex w-full flex-col">
            <ProgressBar percent={10} needIndicator={false} />
            <div className="flex items-center justify-between">
              <p>nn.n%</p>
              <p>00000번 우승</p>
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
      </div>
    </article>
  )
}
