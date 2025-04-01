import { Button } from "@/components/Button"
import { Circle } from "lucide-react"

export default function SideBar() {
  return (
    <section className="hidden h-fit flex-shrink-0 flex-col gap-[24px] md:flex md:w-[224px] lg:w-[282px]">
      <section className="flex flex-col gap-[20px] rounded-[40px] border px-[16px] py-[40px]">
        <article className="flex items-center justify-between">
          <p>월드컵 완성까지</p>
          <p className="rounded-[100px] bg-gray-10 px-[12px] py-[4px]">n%</p>
        </article>
        <div className="relative h-[12px] w-full rounded-full bg-[#F5F5F5]">
          <div className="h-[12px] rounded-full bg-black" style={{ width: `${0}%` }} />
          <div
            className="absolute top-1/2 h-[16px] w-[16px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"
            style={{ left: `${0}%` }}
          />
        </div>
        <hr />
        <article className="flex items-center justify-between">
          <p>월드컵 정보</p>
          <Circle stroke="#DDDDDD" />
          {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
        </article>
        <article className="flex items-center justify-between">
          <p>공개 설정</p>
          <Circle stroke="#DDDDDD" />
          {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
        </article>
        <article className="flex items-center justify-between">
          <p>콘텐츠</p>
          <Circle stroke="#DDDDDD" />
          {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
        </article>
      </section>
      <Button className="bg-black text-white">다음</Button>
    </section>
  )
}
