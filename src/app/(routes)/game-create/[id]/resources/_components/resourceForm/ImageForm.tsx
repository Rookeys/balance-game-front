"use client"

import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import InputTextControlled from "@/components/form/inputText/InputTextControlled"
import { FieldValues, FormProvider, useForm } from "react-hook-form"
import type { ResourceType } from "../../page"
import ImageThumbnailBox from "../ImageThumbnailBox"
import FormAction from "./FormAction"

type ImageResourceType = {
  name: string
  url: string
  files: File[] | null
}

export default function ImageForm(props: ResourceType) {
  const formMethods = useForm<ImageResourceType>({
    defaultValues: {
      name: props.name,
      url: props.url
    }
  })

  const { handleSubmit, setValue, watch } = formMethods

  const onSubmit = (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-fit border-b border-dark dark:border-gray">
          <article className="border-r border-dark dark:border-gray w-[180px] flex-shrink-0">
            <ImageThumbnailBox url={props.url} />
          </article>
          <article className="border-r border-dark dark:border-gray p-4 w-[180px] flex-shrink-0">
            <InputTextControlled
              id="name"
              value={watch("name")}
              onChange={(e) => setValue("name", e.target.value, { shouldValidate: true })}
            />
          </article>
          <article className="border-r border-dark dark:border-gray w-[360px] flex-shrink-0">
            <FileUploadDropZone
              value={watch("files") ?? []}
              onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
              rounded={false}
              isThumbnail={false}
            />
          </article>
          <article className="border-r border-dark dark:border-gray p-4 w-[180px] flex-shrink-0">{props.winRate}</article>
          <article className="p-4 w-[180px] flex-shrink-0">
            <FormAction />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
