"use client"

import { Button } from "@/components/Button"
import FileUploadDropZoneResource from "@/components/form/fileUpload/FileUploadDropZoneResource"
import InputText from "@/components/form/inputText/InputText"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { cn } from "@/utils/cn"
import { CircleAlert, XIcon } from "lucide-react"
import Image from "next/image"
import { useFormContext } from "react-hook-form"
import { EditResourceType } from "./ResourceForm"

interface Params {
  onClose?: () => void
  onSave?: () => void
  overlayClose?: boolean
}

export default function ImageEditModal({ onClose, onSave, overlayClose }: Params) {
  const { watch, setValue } = useFormContext<EditResourceType>()

  return (
    <ModalWrapper overlayClose={overlayClose} onClose={onClose}>
      <section
        className={cn(
          "z-[999] mx-[16px] w-full max-w-[500px] rounded-[16px] bg-white p-[16px] text-center dark:border dark:border-gray-70 dark:bg-night"
        )}
      >
        <article className="flex items-center justify-between">
          <div className="h-[24px] w-[24px]" />
          <p>이미지 수정</p>
          <XIcon size={24} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="flex flex-col gap-[24px] pb-[40px] pt-[20px]">
          <div className="flex flex-col gap-[12px]">
            {watch("content") ? (
              <div className="relative aspect-[5/4] w-full">
                <Image src={watch("content") || "/"} fill alt="thumbnail" />
              </div>
            ) : (
              <FileUploadDropZoneResource
                value={watch("newImage") ?? []}
                onValueChange={(files) => setValue("newImage", files, { shouldValidate: true })}
                rounded={true}
                isThumbnail={true}
                isFileName={false}
                multiple={false}
                maxFiles={1}
              />
            )}
            <div className="flex gap-[4px] text-gray-30">
              <CircleAlert className="flex-shrink-0 fill-gray-30 text-white" />
              <p className="text-[14px]">JPEG, JPG, PNG 형식을 지원하며 이미지 당 최대 4MB까지 업로드할 수 있어요.</p>
            </div>
          </div>
          <InputText
            id="title"
            value={watch("title")}
            onChange={(e) => setValue("title", e.target.value, { shouldValidate: true })}
            maxLength={20}
          />
        </article>
        <article className="flex items-center justify-between gap-[12px] pb-[40px]">
          <Button
            type="button"
            className="w-fit rounded-[12px] bg-dark-20 px-[28px] py-[12px] text-white hover:bg-dark-30"
            onClick={() => setValue("content", "", { shouldValidate: true })}
          >
            이미지 삭제
          </Button>
          <Button
            type="button"
            className="w-fit rounded-[12px] bg-blue-40 px-[28px] py-[12px] text-white hover:bg-blue-50"
            onClick={onSave}
          >
            확인
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
