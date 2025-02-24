"use client"

import { Button } from "@/components/Button"
import InputTextControlled from "@/components/form/inputText/InputTextControlled"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import { postYoutubeMediaSchema } from "@/validations/youtubeMediaSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import { useForm, type FieldValues } from "react-hook-form"

const YoutubeModal = dynamic(() => import("@/components/modal/YoutubeModal"))
const InputErrorMessage = dynamic(() => import("@/components/form/_components").then((mod) => mod.InputErrorMessage))

export function YoutubeUploadForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm({
    defaultValues: {
      url: "",
      start: 0,
      end: 0
    },
    resolver: zodResolver(postYoutubeMediaSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
    // Todo start, end 가 0일때는 값 보내지않기
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-[500px] flex-col gap-[28px]">
        <p>동영상 업로드</p>
        <InputTextControlled
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
            <InputTextControlled
              id="start"
              className="max-w-[100px]"
              placeholder="시작(초)"
              type="number"
              min={0}
              value={watch("start")}
              onChange={(e) => setValue("start", Number(e.target.value), { shouldValidate: true })}
            />
            <InputTextControlled
              id="end"
              className="max-w-[100px]"
              placeholder="종료(초)"
              type="number"
              min={0}
              value={watch("end")}
              onChange={(e) => setValue("end", Number(e.target.value), { shouldValidate: true })}
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
          start={watch("start")}
          end={watch("end")}
          onClose={() => setIsOpen(false)}
          overlayClose
        />
      )}
    </>
  )
}
