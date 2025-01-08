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
    end: 10
  },
  {
    id: 3,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 3",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 4,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 4",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 5,
    url: "https://www.youtube.com/watch?v=zXE9bJtUhMg",
    type: "youtube",
    name: "이별 감성 마스터 벤 정주행",
    media: "유튜브 데이터 5",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 6,
    url: "https://www.youtube.com/watch?v=8CXhrs_y_EE",
    type: "youtube",
    name: "아름다운 이별 - 불후의 명곡",
    media: "유튜브 데이터 6",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 7,
    url: "https://www.youtube.com/watch?v=Kkqcr9K2nvg",
    type: "youtube",
    name: "한 편의 영화 같은 널 사랑했어",
    media: "유튜브 데이터 7",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 8,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 8",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 9,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 9",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 10,
    url: "https://www.youtube.com/watch?v=zXE9bJtUhMg",
    type: "youtube",
    name: "이별 감성 마스터 벤 정주행",
    media: "유튜브 데이터 10",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 11,
    url: "https://www.youtube.com/watch?v=8CXhrs_y_EE",
    type: "youtube",
    name: "아름다운 이별 - 불후의 명곡",
    media: "유튜브 데이터 11",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 12,
    url: "https://www.youtube.com/watch?v=Kkqcr9K2nvg",
    type: "youtube",
    name: "한 편의 영화 같은 널 사랑했어",
    media: "유튜브 데이터 12",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 13,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 13",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 14,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 14",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 15,
    url: "https://www.youtube.com/watch?v=zXE9bJtUhMg",
    type: "youtube",
    name: "이별 감성 마스터 벤 정주행",
    media: "유튜브 데이터 15",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 16,
    url: "https://www.youtube.com/watch?v=8CXhrs_y_EE",
    type: "youtube",
    name: "아름다운 이별 - 불후의 명곡",
    media: "유튜브 데이터 16",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 17,
    url: "https://www.youtube.com/watch?v=Kkqcr9K2nvg",
    type: "youtube",
    name: "한 편의 영화 같은 널 사랑했어",
    media: "유튜브 데이터 17",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 18,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 18",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 19,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 19",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 20,
    url: "https://www.youtube.com/watch?v=zXE9bJtUhMg",
    type: "youtube",
    name: "이별 감성 마스터 벤 정주행",
    media: "유튜브 데이터 20",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 21,
    url: "https://www.youtube.com/watch?v=8CXhrs_y_EE",
    type: "youtube",
    name: "아름다운 이별 - 불후의 명곡",
    media: "유튜브 데이터 21",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 22,
    url: "https://www.youtube.com/watch?v=Kkqcr9K2nvg",
    type: "youtube",
    name: "한 편의 영화 같은 널 사랑했어",
    media: "유튜브 데이터 22",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 23,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 23",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 24,
    url: "https://www.youtube.com/watch?v=W3qIzaNndH4",
    type: "youtube",
    name: "유튜브 영상",
    media: "유튜브 데이터 24",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 25,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 25",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 26,
    url: "https://www.youtube.com/watch?v=RyOx9ONNWy8",
    type: "youtube",
    name: "벤의 버스킹 모음",
    media: "유튜브 데이터 26",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 27,
    url: "https://www.youtube.com/watch?v=zXE9bJtUhMg",
    type: "youtube",
    name: "이별 감성 마스터 벤 정주행",
    media: "유튜브 데이터 27",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 28,
    url: "https://www.youtube.com/watch?v=8CXhrs_y_EE",
    type: "youtube",
    name: "아름다운 이별 - 불후의 명곡",
    media: "유튜브 데이터 28",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 29,
    url: "https://www.youtube.com/watch?v=Kkqcr9K2nvg",
    type: "youtube",
    name: "한 편의 영화 같은 널 사랑했어",
    media: "유튜브 데이터 29",
    winRate: "60%",
    start: 5,
    end: 10
  },
  {
    id: 30,
    url: "https://www.youtube.com/watch?v=4bwRyeT1afM",
    type: "youtube",
    name: "벤의 킬링보이스 라이브",
    media: "유튜브 데이터 30",
    winRate: "60%",
    start: 5,
    end: 10
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
