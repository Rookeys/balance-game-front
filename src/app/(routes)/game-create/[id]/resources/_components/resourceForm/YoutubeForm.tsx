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
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-dark">
          <div className="border-r border-dark">
            <YoutubeThumbnailBox url={props.url} />
          </div>
          <div className="border-r border-dark p-4">{props.name}</div>
          <div className="border-r border-dark p-4">동영상</div>
          <div className="border-r border-dark p-4">{props.winRate}</div>
          <div className="p-4">수정 및 삭제관련 로직</div>
        </div>
      </form>
    </FormProvider>
  )
}
