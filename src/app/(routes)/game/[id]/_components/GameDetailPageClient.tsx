"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
// import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"
import ResourceItem from "@/components/ResourceItem"
import { convertUtcToKoreaDate } from "@/utils/dayjsWithExtends"
import { getMaxRound } from "@/utils/getMaxRound"
import { useParams } from "next/navigation"
import DesktopCards from "./DesktopCards"
import DesktopPlayButton from "./DesktopPlayButton"
import GameDetailBottomBar from "./GameDetailBottomBar"
import TabletCards from "./TabletCards"
import TabletPlayButton from "./TabletPlayButton"

export default function GameDetailPageClient() {
  const { id } = useParams()
  const { data } = useGetGameStatus(Number(id))

  return (
    <>
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px] md:flex-row md:gap-[24px]">
        <div className="relative aspect-[5/4] h-fit w-full md:max-w-[50%]">
          <ResourceItem {...data?.leftSelection} ratio={5 / 4} />
        </div>
        <section className="flex w-full flex-col gap-[28px] md:max-w-[50%] md:gap-[40px]">
          <article className="flex items-center gap-[12px]">
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">{data?.totalResourceNums}개의 콘텐츠</p>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">
              {getMaxRound(data?.totalResourceNums)}강까지 플레이 가능
            </p>
          </article>
          <article className="flex flex-col gap-[12px]">
            <p>
              출시일 {convertUtcToKoreaDate(data?.createdAt)} / 수정일 {convertUtcToKoreaDate(data?.updatedAt)}
            </p>
            <p>{data?.title}</p>
            <p>{data?.description}</p>
          </article>
          <DesktopCards />
          <DesktopPlayButton />
        </section>
      </section>
      <TabletCards />
      <TabletPlayButton />
      <GameDetailBottomBar />
    </>
  )
}
