"use client"

import {
  getGetCountResourcesInGamesQueryKey,
  getGetResourcesUsingPageQueryKey,
  useDeleteSelectResources,
  useGetCountResourcesInGames
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useGetResourceList } from "@/app/(routes)/(ssr)/game-create/[id]/resources/hooks/useGetResourceList"
import { handleSelectAllToggle } from "@/app/(routes)/(ssr)/game-create/[id]/resources/utils/selectAllResource"
import Filter from "@/components/Filter"
import GameFormSideBar from "@/components/form/gameRoom/_components/GameFormSideBar"
import SearchInput from "@/components/SearchInput"
import StepTab, { StepTabItem } from "@/components/StepTab"
import { resourceListFilters } from "@/constants/filters"
import CustomCheckIcon from "@/icons/CustomCheckIcon"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { COLORS } from "@/styles/theme/colors"
import { getMaxRound } from "@/utils/getMaxRound"
import { useQueryClient } from "@tanstack/react-query"
import { Search, Square } from "lucide-react"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"
import ResourceDeleteModal from "./resourceForm/ResourceDeleteModal"
import ResourceFormWrapper from "./resourceForm/ResourceFormWrapper"

export default function ResourceFormContainer() {
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

  const searchParams = useSearchParams()

  const router = useRouter()

  const { id } = useParams()

  const { data } = useGetResourceList()

  const queryClient = useQueryClient()

  const { mutateAsync: deleteSelectedAll } = useDeleteSelectResources()

  const { selectedResourceIds, clearSelectedResourceIds, isAllSelected } = useSelectedResourceIdStore()

  const { data: resourceNumbers } = useGetCountResourcesInGames(Number(id))

  const handleSearch = (keyword: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    newSearchParams.set("keyword", keyword.toString())
    newSearchParams.delete("page")
    router.push(`?${newSearchParams.toString()}`, { scroll: false })
  }

  const handleAllDelete = async () => {
    await deleteSelectedAll({ gameId: Number(id), data: { list: selectedResourceIds } })
    // await queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) })

    await Promise.all([
      queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) }),
      queryClient.invalidateQueries({ queryKey: getGetCountResourcesInGamesQueryKey(Number(id)) })
    ])

    clearSelectedResourceIds()
    setIsOpenDeleteModal(false)
  }

  const stepItems: StepTabItem[] = [
    {
      label: "업로드",
      value: 1,
      onClick: () => {
        router.push(`/game-create/${id}/medias`)
      }
    },
    {
      label: "편집",
      value: 2,
      onClick: () => {}
    }
  ]

  return (
    <>
      {/* <GameFormMobileTab step={2} setStep={() => {}} /> */}
      <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
        <section className="flex w-full flex-col gap-[40px]">
          <section className="flex w-full flex-col md:gap-[40px]">
            <StepTab items={stepItems} currentValue={2} />
          </section>
          {/* <MediaTab /> */}
          <div className="flex flex-col gap-[20px]">
            <article className="flex flex-col gap-[8px]">
              <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">콘텐츠를 편집해 보세요</p>
              <p className="text-label-regular md:text-body2-regular">
                업로드한 콘텐츠를 수정하거나 삭제할 수 있어요. 개성 있는 이름을 붙여 더욱 특별하게 콘텐츠를 표현해
                보세요!
              </p>
            </article>
            <p className="rounded-[8px] border border-primary-normal bg-primary-alternative px-[16px] py-[12px] text-label-bold text-primary-on-primary md:text-body2-bold">
              업로드한 콘텐츠 {resourceNumbers}개, {getMaxRound(resourceNumbers)}강까지 플레이 가능해요.
            </p>
          </div>
          <section className="flex flex-col gap-[12px]">
            <article className="flex flex-col justify-between gap-[12px] lg:h-[40px] lg:flex-row-reverse">
              <SearchInput
                placeholder="이름으로 콘텐츠 찾기"
                Icon={Search}
                iconProps={{ color: COLORS.NEUTRAL_700 }}
                className="lg:max-w-[340px]"
                onSearch={handleSearch}
              />
              <article className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[4px]">
                  <button className="lg:hidden" onClick={() => handleSelectAllToggle(data?.content)}>
                    {isAllSelected(data?.content ?? []) ? (
                      <CustomCheckIcon className="rounded-[4px] bg-primary-normal p-[2px] text-white" size={16} />
                    ) : (
                      <Square color={COLORS.NEUTRAL_300} size={24} />
                    )}
                  </button>
                  <p className="text-label-regular">
                    {selectedResourceIds.length > 0
                      ? `선택 ${selectedResourceIds.length}개`
                      : `총 ${data?.totalElements || 0}개`}
                  </p>
                </div>
                <button
                  className="h-full rounded-[4px] px-[12px] text-label-neutral"
                  onClick={() => {
                    if (selectedResourceIds.length === 0) {
                      toast.warning("선택된 콘텐츠가 없어요")
                    } else {
                      setIsOpenDeleteModal(true)
                    }
                  }}
                >
                  선택삭제
                </button>
                <Filter filters={resourceListFilters} />
              </article>
            </article>
            {/* {windowWidth !== 0 &&
              (windowWidth > SCREEN_SIZE.md ? (
                <ResourceTableDesktop resources={data?.content} />
              ) : (
                <ResourceTable resources={data?.content} />
              ))} */}
            <ResourceFormWrapper />
          </section>
        </section>
        <GameFormSideBar step={2} isStep1Complete percent={resourceNumbers && resourceNumbers >= 2 ? 100 : 66} />
      </section>
      {isOpenDeleteModal && (
        <ResourceDeleteModal onClick={handleAllDelete} onClose={() => setIsOpenDeleteModal(false)} />
      )}
    </>
  )
}
