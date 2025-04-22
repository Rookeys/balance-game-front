"use client"
import { useGetCountResourcesInGames } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import GameFormBottomBar from "@/components/form/gameRoom/_components/GameFormBottomBar"
import GameFormSideBar from "@/components/form/gameRoom/_components/GameFormSideBar"
import StepTab, { StepTabItem } from "@/components/StepTab"
import { getMaxRound } from "@/utils/getMaxRound"
import { useParams, useRouter } from "next/navigation"
import { ImageUploadForm } from "./ImageUploadForm"
import { YoutubeUploadForm } from "./YoutubeUploadForm"

export default function MediaForm() {
  const { id } = useParams()
  const { data: resourceNumbers } = useGetCountResourcesInGames(Number(id))
  const router = useRouter()

  const stepItems: StepTabItem[] = [
    {
      label: "업로드",
      value: 1,
      onClick: () => {}
    },
    {
      label: "편집",
      value: 2,
      onClick: () => {
        router.push(`/game-create/${id}/resources`)
      }
    }
  ]
  return (
    <>
      {/* <GameFormMobileTab step={2} setStep={() => {}} /> */}
      <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
        <section className="flex w-full flex-col gap-[40px]">
          {/* <MediaTab /> */}
          <section className="flex w-full flex-col md:gap-[40px]">
            <StepTab items={stepItems} currentValue={1} />
          </section>
          <div className="flex flex-col gap-[20px]">
            <article className="flex flex-col gap-[4px]">
              <div className="flex gap-[4px]">
                <p>콘텐츠 업로드</p>
                <p>🚀</p>
              </div>
              <p>
                이미지나 유튜브 동영상을 2개 이상 업로드하면 월드컵을 만들 수 있어요. 다양한 콘텐츠로 재미있는 월드컵을
                만들어보세요!
              </p>
            </article>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[12px]">
              업로드한 콘텐츠 {resourceNumbers}개, {getMaxRound(resourceNumbers)}강까지 플레이 가능해요.
            </p>
          </div>
          <ImageUploadForm />
          <YoutubeUploadForm />
        </section>
        <GameFormSideBar step={2} isStep1Complete percent={resourceNumbers && resourceNumbers >= 2 ? 100 : 66} />
      </section>
      <GameFormBottomBar step={2} setStep={() => {}} />
    </>
  )
}
