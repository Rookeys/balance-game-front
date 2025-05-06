"use client"

import { GameResourceRequest } from "@/api/orval/model/gameResourceRequest"
import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import ModalWrapper from "@/components/modal/ModalWrapper"
import YoutubeThumbnailBoxWithHover from "@/components/YoutubeThumbnailBoxWithHover"
import { COLORS } from "@/styles/theme/colors"
import { cn } from "@/utils/cn"
import { CircleAlert, XIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"

interface Params {
  onClose?: () => void
  onSave?: () => void
  overlayClose?: boolean
}

export default function YoutubeEditModal({ onClose, onSave, overlayClose }: Params) {
  const {
    watch,
    setValue,
    formState: { isSubmitting }
  } = useFormContext<GameResourceRequest>()
  return (
    <ModalWrapper overlayClose={overlayClose} onClose={onClose}>
      <section className={cn("z-[999] h-full w-full max-w-[500px] rounded-[16px] bg-background p-[16px] text-center")}>
        <article className="flex items-center justify-between">
          <div className="h-[24px] w-[24px]" />
          <p className="text-body2-bold">동영상 수정</p>
          <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
        </article>
        <article className="flex flex-col gap-[24px] pb-[24px] pt-[20px]">
          <div className="flex flex-col gap-[12px]">
            <figure
              className={cn("relative aspect-[16/9] w-full")}
              // className={cn("relative aspect-[16/9] w-full", watch('url') && 'bg-black')}
            >
              {!!watch("content") ? (
                <YoutubeThumbnailBoxWithHover
                  url={watch("content") ?? ""}
                  start={watch("startSec")}
                  end={watch("endSec")}
                  ratio={16 / 9}
                  // noDelay={noDelay}
                  // wrapperClassName={wrapperClassName}
                />
              ) : (
                <div className="relative h-full w-full overflow-hidden rounded-[12px]">
                  <div className="flex h-full flex-col items-center justify-center gap-[12px] bg-fill-normal">
                    <div className="h-[60px] w-[60px] bg-red-300" />
                    <p className="text-body2-bold md:text-body1-bold">유튜브 링크를 추가해 주세요</p>
                    <p className="text-label-medium text-label-neutral md:text-body2-medium">
                      아래 입력란에 유튜브 링크를 넣고 동영상을 추가해 보세요.
                    </p>
                  </div>
                </div>
              )}
            </figure>
          </div>
        </article>
        <article className="mb-[40px] flex flex-col gap-[12px]">
          <InputText
            id="content"
            value={watch("content")}
            onChange={(e) => setValue("content", e.target.value, { shouldValidate: true })}
          />
          <article className="flex items-center gap-[12px]">
            <InputText
              id="startSec"
              className="w-full"
              placeholder="시작(초)"
              type="text"
              pattern="\d*"
              value={watch("startSec") ?? ""}
              // onChange={(e) => setValue("startSec", Number(e.target.value), { shouldValidate: true })}
              onChange={(e) => {
                const value = e.target.value
                // 숫자 외의 문자가 입력되지 않도록 처리
                if (/^\d*$/.test(value)) {
                  setValue("startSec", value === "" ? undefined : Number(value), { shouldValidate: true })
                }
              }}
            />
            <InputText
              id="endSec"
              className="w-full"
              placeholder="종료(초)"
              type="text"
              pattern="\d*"
              value={watch("endSec") ?? ""}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d*$/.test(value)) {
                  setValue("endSec", value === "" ? undefined : Number(value), { shouldValidate: true })
                }
              }}
            />
          </article>
          <div className="flex items-start gap-[4px]">
            <CircleAlert className="flex-shrink-0 fill-label-alternative text-white" size={16} />
            <p className="text-caption1-regular text-label-alternative md:text-label-regular">
              시작/종료 시간은 선택 사항이에요. 설정하면 해당 구간이 반복 재생되므로, 하이라이트 설정을 권장해요.
            </p>
          </div>
          <article className="w-full">
            <InputText
              id="title"
              className="w-full"
              value={watch("title")}
              onChange={(e) => setValue("title", e.target.value, { shouldValidate: true })}
              maxLength={20}
              label="이름"
              labelClassName="!text-label-regular !font-pretendard text-label-neutral"
            />
          </article>
        </article>
        <article className="flex items-center justify-between gap-[12px] pb-[40px]">
          <Button
            type="button"
            className="w-fit rounded-[12px] bg-transparent text-label-bold text-label-normal hover:bg-transparent"
            onClick={() => setValue("content", "", { shouldValidate: true })}
          >
            동영상 삭제
          </Button>
          <Button type="button" className="px-[28px] py-[12px]" onClick={onSave} disabled={isSubmitting}>
            확인
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
