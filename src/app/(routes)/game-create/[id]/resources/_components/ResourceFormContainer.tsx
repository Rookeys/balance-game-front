"use client"

import Filter from "@/components/Filter"
import MobileTab from "@/components/form/gameRoom/_components/MobileTab"
import SideBar from "@/components/form/gameRoom/_components/SideBar"
import SearchInput from "@/components/SearchInput"
import { resourceListFilters } from "@/constants/filters"
import { Search, Square, SquareCheck } from "lucide-react"
import MediaTab from "../../medias/_components/MediaTab"
import ResourceFormWrapper from "./resourceForm/ResourceFormWrapper"
import { useParams, useRouter, useSearchParams } from "next/navigation"
import { useGetResourceList } from "@/app/(routes)/game-create/[id]/resources/hooks/useGetResourceList"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { useState } from "react"
import ResourceDeleteModal from "./resourceForm/ResourceDeleteModal"
import { toast } from "sonner"
import {
  getGetResourcesUsingPageQueryKey,
  useDeleteSelectResources,
  useGetCountResourcesInGames
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useQueryClient } from "@tanstack/react-query"
import { handleSelectAllToggle } from "@/app/(routes)/game-create/[id]/resources/utils/selectAllResource"
import { getMaxRound } from "@/utils/getMaxRound"

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
    await queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) })
    clearSelectedResourceIds()
    setIsOpenDeleteModal(false)
  }

  return (
    <>
      <MobileTab step={2} setStep={() => {}} />
      <section className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0">
        <section className="flex w-full flex-col gap-[40px]">
          <MediaTab />
          <div className="flex flex-col gap-[20px]">
            <article className="flex flex-col gap-[4px]">
              <div className="flex gap-[4px]">
                <p>콘텐츠 편집</p>
                <p>🎯</p>
              </div>
              <p>
                업로드한 콘텐츠를 수정하거나 삭제할 수 있어요. 개성 있는 이름을 붙여 더욱 특별하게 콘텐츠를 표현해
                보세요!
              </p>
            </article>
            <p className="rounded-[8px] bg-gray-10 px-[16px] py-[12px]">
              업로드한 콘텐츠 {resourceNumbers}개, {getMaxRound(resourceNumbers)}강까지 플레이 가능해요.
            </p>
          </div>
          <section className="flex flex-col gap-[12px]">
            <article className="flex flex-col justify-between gap-[12px] lg:h-[40px] lg:flex-row-reverse">
              <SearchInput
                placeholder="이름으로 콘텐츠 찾기"
                Icon={Search}
                className="lg:max-w-[340px]"
                onSearch={handleSearch}
              />
              <article className="flex items-center gap-[12px]">
                <div className="flex items-center gap-[4px]">
                  <button className="md:hidden" onClick={() => handleSelectAllToggle(data?.content)}>
                    {isAllSelected(data?.content ?? []) ? <SquareCheck /> : <Square />}
                  </button>
                  <p>총{selectedResourceIds.length > 0 ? selectedResourceIds.length : data?.content?.length || 0}개</p>
                </div>
                <button
                  className="h-full rounded-[4px] border px-[12px]"
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
        <SideBar step={2} setStep={() => {}} />
      </section>
      {isOpenDeleteModal && (
        <ResourceDeleteModal onClick={handleAllDelete} onClose={() => setIsOpenDeleteModal(false)} />
      )}
    </>
  )
}
