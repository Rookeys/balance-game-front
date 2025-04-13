"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
// import { dayjsWithExtends as dayjs } from "@/utils/dayjsWithExtends"
import { useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import SelectRoundModal from "@/app/(routes)/game/[id]/play/_components/selectRoundModal/index"
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
          <ResourceItem {...gameDetailData?.leftSelection} ratio={5 / 4} />
        </div>
        <section className="flex w-full flex-col gap-[28px] md:max-w-[50%] md:gap-[40px]">
          <article className="flex items-center gap-[12px]">
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">
              {gameDetailData?.totalResourceNums}개의 콘텐츠
            </p>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[8px]">
              {getMaxRound(gameDetailData?.totalResourceNums)}강까지 플레이 가능
            </p>
          </article>
          <article className="flex flex-col gap-[12px]">
            <p>
              출시일 {convertUtcToKoreaDate(gameDetailData?.createdAt)} / 수정일{" "}
              {convertUtcToKoreaDate(gameDetailData?.updatedAt)}
            </p>
            <p>{gameDetailData?.title}</p>
            <p>{gameDetailData?.description}</p>
          </article>
          <DesktopCards />
          <DesktopPlayButton onClick={() => setIsOpenPlayModal(true)} />
        </section>
      </section>
      <TabletCards />
      <TabletPlayButton onClick={() => setIsOpenPlayModal(true)} />
      <GameDetailBottomBar onClick={() => setIsOpenPlayModal(true)} />
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
