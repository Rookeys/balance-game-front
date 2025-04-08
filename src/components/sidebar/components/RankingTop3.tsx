import { Button } from "@/components/Button"
import { calculateWinRate } from "@/utils/calculateWinRate"
import Image from "next/image"

export default function RankingTop3() {
  return (
    <section className="flex flex-col rounded-[20px] border px-[16px] py-[20px]">
      <p className="mb-[20px]">콘텐츠 랭킹 TOP 3 🏆</p>
      <RankingCard />
      <RankingCard />
      <RankingCard />
      <Button className="mx-auto w-fit bg-gray-10 px-[20px] py-[12px]">랭킹 보러가기</Button>
    </section>
  )
}

const RankingCard = () => {
  return (
    <section className="flex items-center gap-[8px] py-[20px]">
      <p className="flex h-full items-center justify-center">n</p>
      <div className="relative my-auto h-[40px] w-[50px] flex-shrink-0">
        <Image src={"/images/Rookeys.png"} fill alt="thumbnail" className="rounded-[8px]" />
      </div>
      <article className="flex w-full flex-col gap-[4px]">
        {/* <p className="line-clamp-1">{"리소스 이름" || "\u00A0"}</p> */}
        <p className="line-clamp-1">
          리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름리소스이름 리소스이름
        </p>
        <p>승률 {calculateWinRate(1, 20)}%</p>
      </article>
    </section>
  )
}
