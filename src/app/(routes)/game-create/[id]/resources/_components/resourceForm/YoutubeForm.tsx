"use client"

import { FieldValues, FormProvider, useForm } from "react-hook-form"
import type { ResourceType } from "../../page"
import YoutubeThumbnailBox from "../YoutubeThumbnailBox"

type YoutubeResourceType = {
  name: string
  url: string
  start?: number
  end?: number
}

export default function YoutubeForm(props: ResourceType) {
  const formMethods = useForm<YoutubeResourceType>({})

  const { handleSubmit } = formMethods

  const onSubmit = (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-fit border-b border-dark dark:border-gray">
          <div className="border-r border-dark dark:border-gray w-[180px] flex-shrink-0">
            <YoutubeThumbnailBox url={props.url} />
          </div>
          <div className="border-r border-dark dark:border-gray p-4 w-[180px] flex-shrink-0">{props.name}</div>
          <div className="border-r border-dark dark:border-gray p-4 w-[360px] flex-shrink-0">동영상</div>
          <div className="border-r border-dark dark:border-gray p-4 w-[180px] flex-shrink-0">{props.winRate}</div>
          <div className="p-4 w-[180px] flex-shrink-0">수정 및 삭제관련 로직</div>
        </div>
      </form>
    </FormProvider>
  )
}
