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
import { calculateWinRate } from "@/utils/calculateWinRate"
import { cn } from "@/utils/cn"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import { SquarePen, Trash2 } from "lucide-react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"
import ImageEditModal from "./ImageEditModal"
import ResourceDeleteModal from "./ResourceDeleteModal"
import YoutubeEditModal from "./YoutubeEditModal"

interface Params {
  resource: GameResourceResponse
  indexNum: number
  tableBaseClassName?: string
  isOpenEditModal: boolean
  setIsOpenEditModal: Dispatch<SetStateAction<boolean>>
  isOpenDeleteModal: boolean
  setIsOpenDeleteModal: Dispatch<SetStateAction<boolean>>
  onSave?: () => void
}
export default function ResourceTableDesktopContents({
  resource,
  indexNum,
  tableBaseClassName,
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

  return (
    <section className={cn("h-[96px]", tableBaseClassName)} key={resource.resourceId}>
      <button
        type="button"
        className="col-span-1 flex items-center justify-center"
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
