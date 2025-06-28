"use client"
import { useGetCountResourcesInGames } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import GameFormBottomBar from "@/components/form/gameRoom/_components/GameFormBottomBar"
import GameFormSideBar from "@/components/form/gameRoom/_components/GameFormSideBar"
import StepTab, { StepTabItem } from "@/components/StepTab"
import TabBar, { TabBarItem } from "@/components/TabBar"
import { getMaxRound } from "@/utils/getMaxRound"
import { useParams, useRouter } from "next/navigation"
import { ImageUploadForm } from "./ImageUploadForm"
import { YoutubeUploadForm } from "./YoutubeUploadForm"

export default function MediaForm() {
  const { id } = useParams()
  const { data: resourceNumbers, isLoading } = useGetCountResourcesInGames(Number(id))
  const router = useRouter()

  const tabItems: TabBarItem[] = [
    {
      label: "기본 설정",
      value: "기본 설정",
      onClick: () => {
        router.push(`/game-create/${id}/edit`)
      }
    },
    {
      label: "콘텐츠",
      value: "콘텐츠",
      onClick: () => {}
    }
  ]

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
      <TabBar items={tabItems} currentValue={"콘텐츠"} className="md:hidden" />
      <section className="flex w-full max-w-[1200px] flex-col justify-center px-[16px] md:flex-row md:gap-[24px] lg:px-0">
        <StepTab items={stepItems} currentValue={1} />
        <section className="flex w-full flex-col gap-[28px] md:gap-[40px]">
          <div className="flex flex-col gap-[20px]">
            <article className="flex flex-col gap-[8px]">
              <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">콘텐츠를 업로드해 주세요</p>
              <p className="text-label-regular md:text-body2-regular">
                이미지나 유튜브 동영상을 2개 이상 업로드하면 월드컵을 만들 수 있어요. 다양한 콘텐츠로 재미있는 월드컵을
                만들어보세요!
              </p>
            </article>
            <p className="rounded-[8px] border border-primary-normal bg-primary-alternative px-[16px] py-[12px] text-label-bold text-primary-on-primary md:text-body2-bold">
              {!isLoading ? (
                <>
                  업로드한 콘텐츠 {resourceNumbers}개, {getMaxRound(resourceNumbers)}강까지 플레이 가능해요.
                </>
              ) : (
                <>데이터를 불러오는 중입니다..</>
              )}
            </p>
          </div>
          <ImageUploadForm />
          <YoutubeUploadForm />
        </section>
        <GameFormSideBar step={2} isStep1Complete percent={resourceNumbers && resourceNumbers >= 2 ? 100 : 66} />
      </section>
      <GameFormBottomBar step={2} setStep={() => {}} percent={resourceNumbers && resourceNumbers >= 2 ? 100 : 66} />
    </>
  )
}
