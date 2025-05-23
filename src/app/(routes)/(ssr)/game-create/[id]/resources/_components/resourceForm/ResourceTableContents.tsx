"use client"
import {
  getGetCountResourcesInGamesQueryKey,
  getGetResourcesUsingPageQueryKey,
  useDeleteResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import MoreButton, { MoreItem } from "@/components/MoreButton"
import ProgressBar from "@/components/ProgressBar"
import CustomCheckIcon from "@/icons/CustomCheckIcon"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"
import ImageEditModal from "./ImageEditModal"
import ResourceDeleteModal from "./ResourceDeleteModal"
import YoutubeEditModal from "./YoutubeEditModal"

interface Params {
  resource: GameResourceResponse
  isOpenEditModal: boolean
  setIsOpenEditModal: Dispatch<SetStateAction<boolean>>
  isOpenDeleteModal: boolean
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>
  onSave?: () => void
}

export default function ResourceTableContents({
  resource,
  isOpenEditModal,
  setIsOpenEditModal,
  isOpenDeleteModal,
  setIsOpenDeleteModal,
  onSave
}: Params) {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { isSelected, toggleSelectedResourceId } = useSelectedResourceIdStore()

  const isChecked = isSelected(resource.resourceId as number)

  const { mutateAsync: deleteResource, isPending: isDeleting } = useDeleteResource()

  const handleDelete = async () => {
    try {
      await deleteResource({ gameId: Number(id), resourceId: Number(resource.resourceId) })

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) }),
        queryClient.invalidateQueries({ queryKey: getGetCountResourcesInGamesQueryKey(Number(id)) })
      ])

      toast.success("콘텐츠 삭제를 완료했습니다.")
      setIsOpenDeleteModal(false)
    } catch (error) {
      log(error)
      toast.error("오류가 발생했습니다.")
    }
  }

  const moreItems: MoreItem[] = [
    {
      label: "수정",
      onClick: () => setIsOpenEditModal(true)
    },
    {
      label: "삭제",
      onClick: () => setIsOpenDeleteModal(true)
    }
  ]

  return (
    <section className="flex gap-[12px] py-[16px]">
      <figure className="relative my-auto h-[100px] w-[120px] overflow-hidden rounded-[8px] border">
        <Image
          src={
            resource?.type === GameResourceResponseType.LINK
              ? getYoutubeThumbnail(resource?.content)
              : (resource?.content ?? "/")
          }
          fill
          alt="thumbnail"
          className="rounded-[8px] object-cover"
        />
        <button
          type="button"
          className={cn("absolute start-[4px] top-[4px] rounded-[4px] bg-dimmer-neutral")}
          onClick={() => toggleSelectedResourceId(resource.resourceId as number)}
        >
          <CustomCheckIcon
            checked={isChecked}
            checkedSrc={"/images/icons/system/checkbox_square_checked.webp"}
            unCheckedSrc={"/images/icons/system/checkbox_square_default.webp"}
            width={28}
            height={28}
          />
        </button>
      </figure>
      <article className="flex w-full flex-col gap-[12px]">
        <p
          className={cn(
            "w-fit rounded-[4px] px-[8px] py-[4px] text-label-medium",
            resource.type === GameResourceResponseType.IMAGE ? "bg-secondary-alternative" : "bg-accent-alternative"
          )}
        >
          {resource.type === GameResourceResponseType.IMAGE ? "이미지" : "동영상"}
        </p>
        <p className="line-clamp-1 text-label-bold md:text-body2-bold">{resource.title || "\u00A0"}</p>
        <div className="flex flex-col">
          <ProgressBar
            percent={Number(calculateWinRate(resource.winningNums, resource.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between text-caption1-medium text-label-neutral">
            <p>{calculateWinRate(resource.winningNums, resource.totalPlayNums)}%</p>
            <p>{resource.winningNums}번 우승</p>
          </div>
        </div>
      </article>
      <div className="relative flex items-start">
        <MoreButton items={moreItems} />
        {/* <button
          type="button"
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <EllipsisVertical />
        </button>
        {isOpen && (
          <section className="absolute end-0 top-[28px] w-[124px] divide-y rounded-[8px] border bg-white p-[8px]">
            {editItems.map((editItem) => (
              <Button
                type="button"
                key={editItem.value}
                variant="custom"
                className="rounded-none w-full whitespace-nowrap px-[16px] py-[12px]"
                onClick={() => {
                  handleClick(editItem.value as "edit" | "delete")
                }}
              >
                {editItem.label}
              </Button>
            ))}
          </section>
        )} */}
      </div>
      {isOpenDeleteModal && (
        <ResourceDeleteModal onClick={handleDelete} onClose={() => setIsOpenDeleteModal(false)} disabled={isDeleting} />
      )}
      {isOpenEditModal &&
        (resource.type === GameResourceResponseType.IMAGE ? (
          <ImageEditModal onClose={() => setIsOpenEditModal(false)} onSave={onSave} />
        ) : (
          <YoutubeEditModal onClose={() => setIsOpenEditModal(false)} onSave={onSave} />
        ))}
    </section>
  )
}
