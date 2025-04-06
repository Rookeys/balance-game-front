"use client"

import { GameResourceRequest } from "@/api/orval/model/gameResourceRequest"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import ResourceTableContents from "./ResourceTableContents"
import ResourceTableDesktopContents from "./ResourceTableDesktopContents"

interface Params {
  resource: GameResourceResponse
  indexNum: number
  tableBaseClassName?: string
}

export default function ResourceForm({ resource, indexNum, tableBaseClassName }: Params) {
  const isOpenEditState = useState<boolean>(false)
  const isOpenDeleteState = useState<boolean>(false)

  const windowWidth = useResizeHandler()

  const formMethods = useForm<GameResourceRequest>({
    values: { ...resource }
  })

  // const handleDelete = () => {
  //   console.log("단일삭제", resource.resourceId)
  // }

  const { handleSubmit } = formMethods

  const onSubmit = (data: GameResourceRequest) => {
    console.log("data", data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {windowWidth !== 0 &&
          (windowWidth > SCREEN_SIZE.md ? (
            <ResourceTableDesktopContents
              resource={resource}
              indexNum={indexNum}
              tableBaseClassName={tableBaseClassName}
              isOpenEditState={isOpenEditState}
              isOpenDeleteState={isOpenDeleteState}
            />
          ) : (
            <ResourceTableContents
              resource={resource}
              isOpenEditState={isOpenEditState}
              isOpenDeleteState={isOpenDeleteState}
            />
          ))}
      </form>
    </FormProvider>
  )
}
