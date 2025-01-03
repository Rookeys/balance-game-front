"use client"

import { Button } from "@/components/Button"
import InputTextControlled from "@/components/form/inputText/InputTextControlled"
import { getYoutubeThumbnail } from "@/utils/getYoutubeThumbnail"
import dynamic from "next/dynamic"
import Image from "next/image"
import { useState } from "react"
import { FieldValues, useForm } from "react-hook-form"

const YoutubeModal = dynamic(() => import("./YoutubeModal"))

export function VideoUploadForm() {
  const { watch, setValue, handleSubmit } = useForm({
    defaultValues: {
      youtubeURL: "",
      startTime: "",
      endTime: ""
    }
  })

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-[500px] gap-[28px]">
        <p>동영상 업로드</p>
        <InputTextControlled
          id="youtubeURL"
          value={watch("youtubeURL")}
          onChange={(e) => setValue("youtubeURL", e.target.value, { shouldValidate: true })}
        />
        <Image
          src={getYoutubeThumbnail(watch("youtubeURL"))}
          alt="Video Thumbnail"
          width={300}
          height={225}
          sizes="(max-width: 640px) 90vw, 300px"
          onClick={() => setIsOpen(true)}
          unoptimized
          // loader={({ src }) => src}
          className="mx-auto rounded-xsm"
        />
        <article className="flex justify-between flex-wrap gap-[20px]">
          <div className="flex gap-[20px]">
            <InputTextControlled
              id="startTime"
              className="max-w-[100px]"
              placeholder="시작(초)"
              type="number"
              min={0}
              value={watch("startTime")}
              onChange={(e) => setValue("startTime", e.target.value, { shouldValidate: true })}
            />
            <InputTextControlled
              id="endTime"
              className="max-w-[100px]"
              placeholder="종료(초)"
              type="number"
              min={0}
              value={watch("endTime")}
              onChange={(e) => setValue("endTime", e.target.value, { shouldValidate: true })}
            />
          </div>
          <Button
            type="submit"
            className="bg-primary hover:bg-primary-60 text-light dark:bg-primary-70 dark:hover:bg-primary-80"
          >
            저장
          </Button>
        </article>
      </form>
      {isOpen && (
        <YoutubeModal
          url={watch("youtubeURL")}
          start={parseInt(watch("startTime"))}
          end={parseInt(watch("endTime"))}
          onClose={() => setIsOpen(false)}
          overlayClose
        />
      )}
    </>
  )
}