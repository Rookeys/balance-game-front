"use client"
import {
  getGetResourcesUsingPageQueryKey,
  useDeleteResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import MoreButton, { MoreAction } from "@/components/MoreButton"
import ProgressBar from "@/components/ProgressBar"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { useQueryClient } from "@tanstack/react-query"
import { Square, SquareCheck } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import ImageEditModal from "./ImageEditModal"
import ResourceDeleteModal from "./ResourceDeleteModal"
import YoutubeEditModal from "./YoutubeEditModal"

interface Params {
  resource: GameResourceResponse
  isOpenEditState: [boolean, Dispatch<SetStateAction<boolean>>]
  isOpenDeleteState: [boolean, Dispatch<SetStateAction<boolean>>]
  onSave?: () => void
}

export default function ResourceTableContents({ resource, isOpenEditState, isOpenDeleteState, onSave }: Params) {
  const [isOpenEditModal, setIsOpenEditModal] = isOpenEditState
  const [isOpenDeleteModal, setIsOpenDeleteModal] = isOpenDeleteState

  const { id } = useParams()

  const queryClient = useQueryClient()

  const { isSelected, toggleSelectedResourceId } = useSelectedResourceIdStore()

  const isChecked = isSelected(resource.resourceId as number)

  const { mutateAsync: deleteResource } = useDeleteResource()

  const handleDelete = async () => {
    await deleteResource({ gameId: Number(id), resourceId: Number(resource.resourceId) })
    await queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) })
  }

  const moreActions: MoreAction[] = [
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
      <figure className="relative my-auto h-[100px] w-[120px]">
        <Image
          src={
            resource?.type === GameResourceResponseType.LINK
              ? getYoutubeThumbnail(resource?.content)
              : (resource?.content ?? "/")
          }
          fill
          alt="thumbnail"
          className="rounded-[8px]"
        />
        <button
          className="absolute start-[4px] top-[4px]"
          onClick={() => toggleSelectedResourceId(resource.resourceId as number)}
        >
          {isChecked ? <SquareCheck /> : <Square />}
        </button>
      </figure>
      <article className="flex w-full flex-col gap-[12px]">
        <p className="w-fit rounded-[4px] bg-gray-10 px-[8px] py-[4px]">
          {resource.type === GameResourceResponseType.IMAGE ? "이미지" : "동영상"}
        </p>
        <p className="line-clamp-1">{resource.title || "\u00A0"}</p>
        <div className="flex flex-col">
          <ProgressBar
            percent={Number(calculateWinRate(resource.winningNums, resource.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between">
            <p>{calculateWinRate(resource.winningNums, resource.totalPlayNums)}%</p>
            <p>{resource.winningNums}번 우승</p>
          </div>
        </div>
      </article>
      <div className="relative flex items-start">
        <MoreButton actions={moreActions} />
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
      {isOpenDeleteModal && <ResourceDeleteModal onClick={handleDelete} onClose={() => setIsOpenDeleteModal(false)} />}
      {isOpenEditModal &&
        (resource.type === GameResourceResponseType.IMAGE ? (
          <ImageEditModal onClose={() => setIsOpenEditModal(false)} onSave={onSave} />
        ) : (
          <YoutubeEditModal onClose={() => setIsOpenEditModal(false)} onSave={onSave} />
        ))}
    </section>
  )
}
