"use client"

import { useSaveLink } from "@/api/orval/client/media-link-controller/media-link-controller"
import { LinkRequest } from "@/api/orval/model/linkRequest"
import { Button } from "@/components/Button"
import InputText from "@/components/form/inputText/InputText"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { log } from "@/utils/log"
import { postYoutubeMediaSchema } from "@/validations/youtubeMediaSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const YoutubeModal = dynamic(() => import("@/components/modal/YoutubeModal"))
const InputErrorMessage = dynamic(() => import("@/components/form/_components").then((mod) => mod.InputErrorMessage))

export function YoutubeUploadForm() {
  const { id } = useParams()
  const { mutateAsync } = useSaveLink()

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors }
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
      await mutateAsync({ gameId: Number(id), data })
      reset()
    } catch (error) {
      log(error)
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-[500px] flex-col gap-[28px]">
        <p>동영상 업로드</p>
        <InputText
          id="url"
          value={watch("url")}
          onChange={(e) => setValue("url", e.target.value, { shouldValidate: true })}
        />
        {!!errors.url?.message && <InputErrorMessage id={"round"} errorMessage={errors.url?.message} />}
        <Image
          src={getYoutubeThumbnail(watch("url"))}
          alt="Video Thumbnail"
          width={300}
          height={225}
          sizes="(max-width: 640px) 90vw, 300px"
          onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
          className="mx-auto rounded-xsm"
        />
        <article className="flex flex-wrap justify-between gap-[20px]">
          <div className="flex gap-[20px]">
            <InputText
              id="startSec"
              className="max-w-[100px]"
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
              id="end"
              className="max-w-[100px]"
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
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
          >
            저장
          </Button>
        </article>
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
