"use client"

import dynamic from "next/dynamic"
import { mockData } from "./mockdata"

const ImageForm = dynamic(() => import("./_components/resourceForm/ImageForm"))
const YoutubeForm = dynamic(() => import("./_components/resourceForm/YoutubeForm"))

export interface ResourceType {
  id: number
  url: string
  type: "image" | "youtube"
  name: string
  media: string
  winRate: string
  start?: number
  end?: number
}

export default function ResourcePage() {
  return (
    <section className="flex justify-center">
      <section className="flex flex-col text-center border-t border-x border-dark dark:border-gray overflow-x-auto">
        {/* Header */}
        <article
          // "grid grid-cols-[1fr_1fr_2fr_1fr_1fr] bg-gray-20 dark:bg-gray-80 border-b border-dark dark:border-gray"
          className="flex bg-gray-20 dark:bg-gray-80 border-b border-dark dark:border-gray w-fit"
        >
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">썸네일</div>
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">이름</div>
          <div className="w-[360px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">미디어</div>
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">우승비율</div>
          <div className="w-[180px] flex-shrink-0 p-4">수정 및 삭제</div>
        </article>

        {/* Body */}
        {mockData.map((data) =>
          data.type === "image" ? <ImageForm key={data.id} {...data} /> : <YoutubeForm key={data.id} {...data} />
        )}
      </section>
    </section>
  )
}
