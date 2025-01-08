"use client"

import dynamic from "next/dynamic"

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

const mockData: ResourceType[] = [
  {
    id: 1,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "고잼",
    media: "이미지 데이터 1",
    winRate: "50%"
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "유튜브 영상",
    media: "이미지 데이터 2",
    winRate: "60%",
    start: 5,
    end: 10,
  }
]

export default function ResourcePage() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col text-center border-t border-x border-dark dark:border-gray overflow-x-auto">
        {/* Header */}
        <div
          // "grid grid-cols-[1fr_1fr_2fr_1fr_1fr] bg-gray-20 dark:bg-gray-80 border-b border-dark dark:border-gray"
          className="flex bg-gray-20 dark:bg-gray-80 border-b border-dark dark:border-gray w-fit"
        >
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">썸네일</div>
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">이름</div>
          <div className="w-[360px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">미디어</div>
          <div className="w-[180px] flex-shrink-0 p-4 border-r border-dark dark:border-gray">우승비율</div>
          <div className="w-[180px] flex-shrink-0 p-4">수정 및 삭제</div>
        </div>

        {/* Body */}
        {mockData.map((data) =>
          data.type === "image" ? <ImageForm key={data.id} {...data} /> : <YoutubeForm key={data.id} {...data} />
        )}
      </div>
    </section>
  )
}
