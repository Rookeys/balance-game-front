"use client"

import {
  getGetCountResourcesInGamesQueryKey,
  getGetResourcesUsingPageQueryKey
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useSaveLink } from "@/api/orval/client/media-link-controller/media-link-controller"
import { LinkRequest } from "@/api/orval/model/linkRequest"
import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import ButtonYoutubePlay from "@/icons/Button_youtubePlay"
import { COLORS } from "@/styles/theme/colors"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { log } from "@/utils/log"
import { postYoutubeMediaSchema } from "@/validations/youtubeMediaSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { CircleAlert } from "lucide-react"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const YoutubeModal = dynamic(() => import("@/components/modal/YoutubeModal"))
// const InputErrorMessage = dynamic(() => import("@/components/form/_components").then((mod) => mod.InputErrorMessage))

export function YoutubeUploadForm() {
  const { id } = useParams()
  const { mutateAsync: SaveYoutubeLink } = useSaveLink()

  const queryClient = useQueryClient()

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<LinkRequest>({
    defaultValues: {
      url: ""
      // startSec: 0,
      // endSec: 0
    },
    resolver: zodResolver(postYoutubeMediaSchema)
  })

  const onSubmit = async (data: LinkRequest) => {
    try {
      await SaveYoutubeLink({ gameId: Number(id), data })

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) }),
        queryClient.invalidateQueries({ queryKey: getGetCountResourcesInGamesQueryKey(Number(id)) })
      ])

      reset()
      toast.success("유튜브 저장을 완료했습니다.")
    } catch (error) {
      log(error)
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-[12px]">
        <p className="font-sb-aggro-medium text-heading-6 md:text-heading-5">유튜브 동영상 추가</p>
        <div className="relative h-[192px] overflow-hidden rounded-[12px] bg-black md:h-[265px] lg:h-[502px]">
          {watch("url") ? (
            <div onClick={() => setIsOpen(true)}>
              <ButtonYoutubePlay />
              <Image
                src={getYoutubeThumbnail(watch("url"))}
                alt="Video Thumbnail"
                fill
                unoptimized
                // loader={({ src }) => src}
                // sizes="(max-width: 640px) 90vw, 300px"
                className="mx-auto object-contain"
              />
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-[8px] bg-fill-normal md:gap-[12px]">
              <div className="relative h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
                <Image src={"/images/icons/upload_video.webp"} alt="upload-video-icon" fill />
              </div>
              <p className="text-body2-bold md:text-body1-bold">유튜브 링크를 추가해 주세요</p>
              <p className="text-label-medium text-label-neutral md:text-body2-medium">
                아래 입력란에 유튜브 링크를 넣고 동영상을 추가해 보세요.
              </p>
            </div>
          )}
        </div>
        <InputText
          id="url"
          value={watch("url")}
          onChange={(e) => setValue("url", e.target.value, { shouldValidate: true })}
          placeholder="유튜브 링크를 추가해 주세요."
        />
        {/* {!!errors.url?.message && <InputErrorMessage id={"round"} errorMessage={errors.url?.message} />} */}
        <article className="flex items-center justify-between gap-[20px]">
          <div className="flex w-full gap-[20px]">
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
              // onChange={(e) => setValue("endSec", Number(e.target.value), { shouldValidate: true })}
              onChange={(e) => {
                const value = e.target.value
                if (/^\d*$/.test(value)) {
                  setValue("endSec", value === "" ? undefined : Number(value), { shouldValidate: true })
                }
              }}
            />
          </div>
        </article>
        <div className="flex items-start justify-between">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-[4px]">
              <CircleAlert size={20} stroke={COLORS.WHITE} fill={COLORS.NEUTRAL_600} />
              <p className="text-caption1-regular text-label-alternative md:text-label-regular">
                부적절하거나 불쾌감을 주는 콘텐츠는 삭제될 수 있어요.
              </p>
            </div>
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="transition-color-custom rounded-[12px] bg-primary-normal px-[28px] py-[12px] hover:bg-primary-hover"
          >
            저장
          </Button>
        </div>
      </form>
      {isOpen && (
        <YoutubeModal
          url={watch("url")}
          start={watch("startSec")}
          end={watch("endSec")}
          onClose={() => setIsOpen(false)}
          overlayClose
        />
      )}
    </>
  )
}
