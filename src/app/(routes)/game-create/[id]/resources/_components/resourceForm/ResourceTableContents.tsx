"use client"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import { GameResourceResponseType } from "@/api/orval/model/gameResourceResponseType"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { EllipsisVertical } from "lucide-react"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import ResourceDeleteModal from "./ResourceDeleteModal"
import ImageEditModal from "./ImageEditModal"
import YoutubeEditModal from "./YoutubeEditModal"

const editItems = [
  { value: "edit", label: "수정" },
  { value: "delete", label: "삭제" }
]

interface Params {
  resource: GameResourceResponse
  isOpenEditState: [boolean, Dispatch<SetStateAction<boolean>>]
  isOpenDeleteState: [boolean, Dispatch<SetStateAction<boolean>>]
  onSave?: () => void
}

export default function ResourceTableContents({ resource, isOpenEditState, isOpenDeleteState, onSave }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isOpenEditModal, setIsOpenEditModal] = isOpenEditState
  const [isOpenDeleteModal, setIsOpenDeleteModal] = isOpenDeleteState

  const handleDelete = () => {
    console.log("단일삭제", resource.resourceId)
  }

  const handleClick = (value: "edit" | "delete") => {
    if (value === "edit") {
      setIsOpenEditModal(true)
    } else {
      setIsOpenDeleteModal(true)
    }
  }

  return (
    <section className="flex gap-[12px] py-[16px]">
      <div className="relative my-auto h-[100px] w-[120px]">
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
      </div>
      <article className="flex flex-1 flex-col gap-[12px]">
        <p className="w-fit rounded-[4px] bg-gray-10 px-[8px] py-[4px]">
          {resource.type === GameResourceResponseType.IMAGE ? "이미지" : "동영상"}
        </p>
        <p className="line-clamp-1">{resource.title || "\u00A0"}</p>
        <div className="flex flex-col">
          <ProgressBar
            percent={Number((((resource.winningNums || 0) / (resource.totalPlayNums || 1)) * 100).toFixed(2))}
            needIndicator={false}
          />
          <div className="flex items-center justify-between">
            <p>{(((resource.winningNums || 0) / (resource.totalPlayNums || 1)) * 100).toFixed(2)} %</p>
            <p>{resource.winningNums}번 우승</p>
          </div>
        </div>
      </article>
      <div className="relative flex items-start">
        <button
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
        )}
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
