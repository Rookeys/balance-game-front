"use client"

import { FieldValues, FormProvider, useForm } from "react-hook-form"
import type { ResourceType } from "../../page"
import ThumbnailBox from "../ThumbnailBox"

export default function ResourceForm(props: ResourceType) {
  const formMethods = useForm()

  const { handleSubmit } = formMethods

  const onSubmit = (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] border-b border-dark">
          <div className="border-r border-dark">
            <ThumbnailBox url={props.url} type={props.type} />
          </div>
          <div className="border-r border-dark p-4">{props.name}</div>
          <div className="border-r border-dark p-4">{props.type === "image" ? "이미지" : "동영상"}</div>
          <div className="border-r border-dark p-4">{props.winRate}</div>
          <div className="p-4">수정 및 삭제관련 로직</div>
        </div>
      </form>
    </FormProvider>
  )
}
