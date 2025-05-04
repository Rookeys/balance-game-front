import {
  getGetCountResourcesInGamesQueryKey,
  getGetResourcesUsingPageQueryKey,
  useDeleteResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import ProgressBar from "@/components/ProgressBar"
import CustomCheckIcon from "@/icons/CustomCheckIcon"
import { useSelectedResourceIdStore } from "@/store/selectedResourceId"
import { COLORS } from "@/styles/theme/colors"
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { useQueryClient } from "@tanstack/react-query"
import { Square, SquarePen, Trash2 } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import ImageEditModal from "./ImageEditModal"
import ResourceDeleteModal from "./ResourceDeleteModal"
import YoutubeEditModal from "./YoutubeEditModal"

interface Params {
  resource: GameResourceResponse
  indexNum: number
  tableBaseClassName?: string
  isOpenEditState: [boolean, Dispatch<SetStateAction<boolean>>]
  isOpenDeleteState: [boolean, Dispatch<SetStateAction<boolean>>]
  onSave?: () => void
}
export default function ResourceTableDesktopContents({
  resource,
  indexNum,
  tableBaseClassName,
  isOpenEditState,
  isOpenDeleteState,
  onSave
}: Params) {
  const { id } = useParams()
  const [isOpenEditModal, setIsOpenEditModal] = isOpenEditState
  const [isOpenDeleteModal, setIsOpenDeleteModal] = isOpenDeleteState

  const queryClient = useQueryClient()

  const { isSelected, toggleSelectedResourceId } = useSelectedResourceIdStore()
  const isChecked = isSelected(resource.resourceId as number)

  const { mutateAsync: deleteResource } = useDeleteResource()

  const handleDelete = async () => {
    await deleteResource({ gameId: Number(id), resourceId: Number(resource.resourceId) })

    await Promise.all([
      queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) }),
      queryClient.invalidateQueries({ queryKey: getGetCountResourcesInGamesQueryKey(Number(id)) })
    ])
  }

  return (
    <section className={cn("h-[96px]", tableBaseClassName)} key={resource.resourceId}>
      <button
        className="col-span-1 flex items-center justify-center"
        onClick={() => toggleSelectedResourceId(resource.resourceId as number)}
      >
        {isChecked ? (
          <CustomCheckIcon className="rounded-[4px] bg-primary-normal p-[2px] text-white" size={16} />
        ) : (
          <Square color={COLORS.NEUTRAL_300} size={24} />
        )}
      </button>
      <div className="col-span-1 flex items-center justify-center">
        <p className="text-label-bold">{indexNum}</p>
      </div>
      <div className="col-span-2 flex items-center justify-center">
        <p
          className={cn(
            "w-fit rounded-[4px] px-[8px] py-[4px] text-label-medium",
            resource.type === GameResourceResponseType.IMAGE ? "bg-secondary-alternative" : "bg-accent-alternative"
          )}
        >
          {resource.type === GameResourceResponseType.IMAGE ? "이미지" : "동영상"}
        </p>
      </div>
      <div className="col-span-3 flex items-center px-[16px] py-[16px]">
        <figure className="relative h-full w-full rounded-[8px]">
          <Image
            src={
              resource?.type === GameResourceResponseType.LINK
                ? getYoutubeThumbnail(resource?.content)
                : (resource?.content ?? "/")
            }
            alt="thumbnail"
            // width={64}
            // height={64}
            fill
            className="mx-auto rounded-[8px] object-cover"
          />
        </figure>
      </div>
      <div className="col-span-5 flex items-center px-[16px]">
        <p className="line-clamp-2 text-body2-bold">{resource.title || "\u00A0"}</p>
      </div>
      <div className="col-span-5 flex items-center px-[16px]">
        <div className="flex w-full flex-col">
          <ProgressBar
            percent={Number(calculateWinRate(resource.winningNums, resource.totalPlayNums))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between text-caption1-medium text-label-neutral">
            <p>{calculateWinRate(resource.winningNums, resource.totalPlayNums)}%</p>
            <p>{resource.winningNums}번 우승</p>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-wrap items-center gap-[8px] px-[16px]">
        <button
          type="button"
          className="h-[40px] w-[40px] rounded-[4px] bg-gray-100 p-[8px]"
          onClick={() => setIsOpenEditModal(true)}
        >
          <SquarePen />
        </button>
        <button
          type="button"
          className="h-[40px] w-[40px] rounded-[4px] bg-gray-100 p-[8px]"
          onClick={() => setIsOpenDeleteModal(true)}
        >
          <Trash2 />
        </button>
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
