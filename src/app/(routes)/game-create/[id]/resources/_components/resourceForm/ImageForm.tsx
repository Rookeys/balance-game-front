"use client"
import {
  getGetResourcesQueryKey,
  useUpdateResource
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useGetPreSignedUrl } from "@/api/orval/client/presigned-url-controller/presigned-url-controller"
import { GameResourceRequest } from "@/api/orval/model/gameResourceRequest"
import { GameResourceRequestType } from "@/api/orval/model/gameResourceRequestType"
import { GameResourceResponse } from "@/api/orval/model/gameResourceResponse"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import InputText from "@/components/form/inputText/InputText"
import { log } from "@/utils/log"
import { putGameImageResourceSchema, PutGameImageResourceType } from "@/validations/gameResourceSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "next/navigation"
import { FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"
import ImageThumbnailBox from "../ImageThumbnailBox"
import FormAction from "./FormAction"

export default function ImageForm(props: GameResourceResponse) {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const formMethods = useForm<PutGameImageResourceType>({
    defaultValues: {
      title: props.title,
      type: GameResourceRequestType.IMAGE
    },
    resolver: zodResolver(putGameImageResourceSchema)
  })

  const { mutateAsync: RequestPresignedUrl } = useGetPreSignedUrl()

  const { mutateAsync: UpdateImageResource } = useUpdateResource()

  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isSubmitting }
  } = formMethods

  const onSubmit = async (data: PutGameImageResourceType) => {
    try {
      let imageURL = null
      if (data.files && data.files.length > 0) {
        const presignedUrl = (await RequestPresignedUrl({ data: { prefix: "image", length: 1 } }))[0] // 해당 폼에서는 무조건 1임

        await axios.put(presignedUrl, data.files[0], {
          headers: {
            "Content-Type": data.files[0].type
          }
        })
        imageURL = new URL(presignedUrl).origin + new URL(presignedUrl).pathname
      }

      const putGameResourceRequest = {
        ...data,
        content: imageURL ? imageURL : props.content
      } satisfies GameResourceRequest
      await UpdateImageResource({
        gameId: Number(id),
        resourceId: Number(props.resourceId),
        data: putGameResourceRequest
      })
      await queryClient.invalidateQueries({ queryKey: getGetResourcesQueryKey(Number(id)) })
      setValue("files", [], { shouldValidate: true })
    } catch (error) {
      log(error)
      toast("오류가 발생했습니다.")
    }
  }

  const files = watch("files")

  const url = files && Array.isArray(files) && files.length > 0 ? URL.createObjectURL(files[0]) : props.content

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-fit border-b border-dark dark:border-gray">
          <article className="w-[180px] flex-shrink-0 border-r border-dark dark:border-gray">
            <ImageThumbnailBox
              // url={watch("files") && watch("files").length > 0 ? URL.createObjectURL(watch("files")[0]) : props.url}
              url={url}
            />
          </article>
          <article className="w-[180px] flex-shrink-0 border-r border-dark p-4 dark:border-gray">
            <InputText
              id="name"
              value={watch("title")}
              onChange={(e) => setValue("title", e.target.value, { shouldValidate: true })}
            />
          </article>
          <article className="w-[360px] flex-shrink-0 border-r border-dark dark:border-gray">
            <FileUploadDropZone
              value={watch("files") ?? []}
              onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
              rounded={false}
              isThumbnail={false}
              isFileName={true}
              multiple={false}
              maxFiles={1}
            />
          </article>
          <article className="flex w-[180px] flex-shrink-0 items-center justify-center border-r border-dark p-4 dark:border-gray">
            <p>{(((props?.winningNums || 0) / (props.totalPlayNums || 1)) * 100).toFixed(2)} %</p>
          </article>
          <article className="w-[180px] flex-shrink-0 p-4">
            <FormAction resourceId={props.resourceId as number} name={props.title} disabled={isSubmitting} />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
