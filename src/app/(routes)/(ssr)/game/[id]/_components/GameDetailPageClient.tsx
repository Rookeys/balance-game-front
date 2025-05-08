"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
// import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"
import { useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import SelectRoundModal from "@/app/(routes)/(ssr)/game/[id]/play/_components/selectRoundModal/index"
import ResourceItem from "@/components/ResourceItem"
import { convertUtcToKoreaDate } from "@/utils/dayjsWithExtends"
import { getMaxRound } from "@/utils/getMaxRound"
import { useParams } from "next/navigation"
import { useState } from "react"
import DesktopCards from "./DesktopCards"
import DesktopPlayButton from "./DesktopPlayButton"
import GameDetailBottomBar from "./GameDetailBottomBar"
import TabletCards from "./TabletCards"
import TabletPlayButton from "./TabletPlayButton"

export default function GameDetailPageClient() {
  const { id } = useParams()
  const { data: gameDetailData } = useGetGameStatus(Number(id))

  const [isOpenPlayModal, setIsOpenPlayModal] = useState<boolean>(false)

  const { data: gamePlayData, isPending: isPendingGamePlayData } = useGetGameDetails(Number(id), {
    query: { enabled: isOpenPlayModal }
  })

  return (
    <>
      <section className="flex w-full max-w-[1200px] flex-col gap-[12px] md:flex-row md:gap-[24px]">
        <div className="relative aspect-[5/4] h-fit w-full md:max-w-[50%]">
          <ResourceItem
            {...gameDetailData?.leftSelection}
            ratio={5 / 4}
            noDelay
            start={gameDetailData?.leftSelection?.startSec}
            end={gameDetailData?.leftSelection?.endSec}
          />
        </div>
        <section className="flex w-full flex-col gap-[28px] md:max-w-[50%] md:gap-[40px]">
          <article className="flex items-center gap-[12px]">
            <p className="rounded-[8px] bg-fill-normal px-[16px] py-[8px] text-label-regular text-label-normal">
              {gameDetailData?.totalResourceNums}개의 콘텐츠
            </p>
            <p className="rounded-[8px] bg-fill-normal px-[16px] py-[8px] text-label-regular text-label-normal">
              {getMaxRound(gameDetailData?.totalResourceNums)}강까지 플레이 가능
            </p>
          </article>
          <article className="flex flex-col gap-[12px]">
            <p className="text-label-regular text-label-alternative">
              출시일 {convertUtcToKoreaDate(gameDetailData?.createdAt)} / 수정일{" "}
              {convertUtcToKoreaDate(gameDetailData?.updatedAt)}
            </p>
            <p className="font-sb-aggro-medium text-heading-5 text-label-normal">{gameDetailData?.title}</p>
            <p className="text-body2-regular text-label-normal">{gameDetailData?.description}</p>
          </article>
          <DesktopCards />
          <DesktopPlayButton onClick={() => setIsOpenPlayModal(true)} id={Number(id)} title={gameDetailData?.title} />
        </section>
      </section>
      <TabletCards />
      <TabletPlayButton onClick={() => setIsOpenPlayModal(true)} id={Number(id)} title={gameDetailData?.title} />
      <GameDetailBottomBar onClick={() => setIsOpenPlayModal(true)} id={Number(id)} title={gameDetailData?.title} />
      {isOpenPlayModal && !isPendingGamePlayData && (
        <SelectRoundModal
          onClose={() => setIsOpenPlayModal(false)}
          totalItem={gamePlayData?.totalResourceNums as number}
        />
      )}
      {/* {isOpenPlayModal && <ConfirmModal />} */}
    </>
  )
}
