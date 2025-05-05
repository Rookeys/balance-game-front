"use client"

import {
  getGetResourcesUsingPageQueryKey,
  useUpdateResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useGetPreSignedUrl } from "@/api/orval/client/presigned-url-controller/presigned-url-controller"
import { GameResourceRequest } from "@/api/orval/model/gameResourceRequest"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { log } from "@/utils/log"
import { putGameImageResourceSchema } from "@/validations/gameResourceSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "next/navigation"
import { useState } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"
import ResourceTableContents from "./ResourceTableContents"
import ResourceTableDesktopContents from "./ResourceTableDesktopContents"

interface Params {
  resource: GameResourceResponse
  indexNum: number
  tableBaseClassName?: string
}

export type EditResourceType = GameResourceRequest & { newImage?: File[] | null }

export default function ResourceForm({ resource, indexNum, tableBaseClassName }: Params) {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false)
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false)

  const windowWidth = useResizeHandler()

  const formMethods = useForm<EditResourceType>({
    values: { ...resource },
    resolver: zodResolver(putGameImageResourceSchema)
  })

  const { mutateAsync: requestPresignedUrl } = useGetPreSignedUrl()

  const { mutateAsync: updateImageResource } = useUpdateResource()

  const { handleSubmit, setValue } = formMethods

  const onSubmit = async (data: EditResourceType) => {
    try {
      let imageURL = null
      if (data.newImage && data.newImage.length > 0) {
        const presignedUrl = (await requestPresignedUrl({ data: { prefix: "image", length: 1 } }))[0] // 해당 폼에서는 무조건 1임

        await axios.put(presignedUrl, data.newImage[0], {
          headers: {
            "Content-Type": data.newImage[0].type
          }
        })
        imageURL = new URL(presignedUrl).origin + new URL(presignedUrl).pathname
      }

      if (!imageURL && !data.content) {
        toast.warning("컨텐츠를 확인해 주세요.")
        return
      }

      const putGameResourceRequest = {
        ...data,
        content: imageURL ? imageURL : data.content
      } satisfies GameResourceRequest
      await updateImageResource({
        gameId: Number(id),
        resourceId: Number(resource.resourceId),
        data: putGameResourceRequest
      })
      await queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) })
      setValue("newImage", [], { shouldValidate: true })

      setIsOpenEditModal(false)
    } catch (error) {
      log(error)
      toast("오류가 발생했습니다.")
    }
  }

  const handleSave = () => {
    return handleSubmit(onSubmit)()
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {windowWidth !== 0 &&
          (windowWidth > SCREEN_SIZE.lg ? (
            <ResourceTableDesktopContents
              resource={resource}
              indexNum={indexNum}
              tableBaseClassName={tableBaseClassName}
              isOpenEditModal={isOpenEditModal}
              setIsOpenEditModal={setIsOpenEditModal}
              setIsOpenDeleteModal={setIsOpenDeleteModal}
              isOpenDeleteModal={isOpenDeleteModal}
              onSave={handleSave}
            />
          ) : (
            <ResourceTableContents
              resource={resource}
              isOpenEditModal={isOpenEditModal}
              setIsOpenEditModal={setIsOpenEditModal}
              setIsOpenDeleteModal={setIsOpenDeleteModal}
              isOpenDeleteModal={isOpenDeleteModal}
              onSave={handleSave}
            />
          ))}
      </form>
    </FormProvider>
  )
}
