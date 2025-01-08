"use client"

import ResourceForm from "./_components/form/ResourceForm"

export interface ResourceType {
  id: number
  url: string
  type: "image" | "youtube"
  name: string
  media: string
  winRate: string
}

const mockData: ResourceType[] = [
  {
    id: 1,
    url: "https://avatars.githubusercontent.com/u/62785823?v=4",
    type: "image",
    name: "고잼",
    media: "이미지 데이터 1",
    winRate: "50% (5/10)"
  },
  {
    id: 2,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "유튜브 영상",
    media: "이미지 데이터 2",
    winRate: "60% (6/10)"
  }
]

export default function ResourcePage() {
  return (
    <section className="flex justify-center">
      <div className="grid w-full max-w-[1080px] text-center border border-dark">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] bg-gray-20 border-b border-dark">
          <div className="p-4 border-r border-dark">썸네일</div>
          <div className="p-4 border-r border-dark">이름</div>
          <div className="p-4 border-r border-dark">이미지/동영상</div>
          <div className="p-4 border-r border-dark">우승비율 (우승횟수 / 전체게임 수)</div>
          <div className="p-4">수정 및 삭제</div>
        </div>

        {/* Body */}
        {mockData.map((data) => (
          <ResourceForm key={data.id} {...data} />
        ))}
      </div>
    </section>
  )
}
