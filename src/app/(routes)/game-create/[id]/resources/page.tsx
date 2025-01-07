"use client"

import ThumbnailBox from './_components/ThumbnailBox'

interface dataType {
  id: number
  url: string
  type: "image" | "youtube"
  name: string
  media: string
  winRate: string
}

const mockData: dataType[] = [
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
      <table className="table-auto border-collapse border border-dark w-full max-w-[1080px] text-center">
        <thead className="bg-gray-20">
          <tr>
            <th className="p-4 border border-dark">썸네일</th>
            <th className="p-4 border border-dark">이름</th>
            <th className="p-4 border border-dark">이미지/동영상</th>
            <th className="p-4 border border-dark">우승비율 (우승횟수 / 전체게임 수)</th>
            <th className="p-4 border border-dark">수정 및 삭제</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr className="">
            <td className="p-4 border border-dark">썸네일 데이터</td>
            <td className="p-4 border border-dark">이름 데이터</td>
            <td className="p-4 border border-dark">이미지 데이터</td>
            <td className="p-4 border border-dark">우승비율 데이터</td>
            <td className="p-4 border border-dark">수정 및 삭제 관련 데이터</td>
          </tr> */}
          {mockData.map((data) => (
            <tr key={data.id} className="">
              <td className="p-4 border border-dark">
                <ThumbnailBox url={data.url} type={data.type} />
              </td>
              <td className="p-4 border border-dark">{data.name}</td>
              <td className="p-4 border border-dark">{data.type === 'image' ? '이미지' : '동영상'}</td>
              <td className="p-4 border border-dark">{data.winRate}</td>
              <td className="p-4 border border-dark">수정 및 삭제관련 로직</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
