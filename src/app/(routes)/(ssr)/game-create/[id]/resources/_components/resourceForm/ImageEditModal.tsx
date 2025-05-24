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
import { COLORS } from "@/styles/theme/colors"

interface Params {
  onClose?: () => void
  onSave?: () => void
  overlayClose?: boolean
}

export default function ImageEditModal({ onClose, onSave, overlayClose }: Params) {
  const {
    watch,
    setValue,
    formState: { isSubmitting }
  } = useFormContext<EditResourceType>()

  return (
    <ModalWrapper overlayClose={overlayClose} onClose={onClose}>
      <section className={cn("z-[999] h-full w-full max-w-[500px] rounded-[16px] bg-background p-[16px] text-center")}>
        <article className="flex items-center justify-between">
          <div className="h-[24px] w-[24px]" />
          <p className="text-body2-bold">이미지 수정</p>
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
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
            <div className="flex items-start gap-[4px]">
              <CircleAlert className="flex-shrink-0 fill-label-alternative text-white" size={16} />
              <p className="text-caption1-regular text-label-alternative md:text-label-regular">
                JPEG, JPG, PNG, WEBP 형식을 지원하며 이미지 당 최대 4MB까지 업로드할 수 있어요.
              </p>
            </div>
          </div>
          <InputText
            id="title"
            value={watch("title")}
            onChange={(e) => setValue("title", e.target.value, { shouldValidate: true })}
            maxLength={20}
            label="이름"
            labelClassName="!text-label-regular !font-pretendard text-label-neutral"
          />
        </article>
        <article className="flex items-center justify-between gap-[12px] pb-[40px]">
          <Button
            type="button"
            className="w-fit rounded-[12px] bg-transparent text-label-bold text-label-normal hover:bg-transparent"
            onClick={() => {
              setValue("content", "", { shouldValidate: true })
              setValue("newImage", undefined, { shouldValidate: true })
            }}
          >
            이미지 삭제
          </Button>
          <Button className="px-[28px] py-[12px]" type="button" onClick={onSave} disabled={isSubmitting}>
            저장
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
