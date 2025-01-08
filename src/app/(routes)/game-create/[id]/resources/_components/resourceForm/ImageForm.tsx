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
        <section className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr] border-b border-dark dark:border-gray">
          <article className="border-r border-dark dark:border-gray">
            <ImageThumbnailBox url={props.url} />
          </article>
          <article className="border-r border-dark dark:border-gray p-4">
            <InputTextControlled
              id="name"
              value={watch("name")}
              onChange={(e) => setValue("name", e.target.value, { shouldValidate: true })}
            />
          </article>
          <article className="border-r border-dark dark:border-gray">
            <FileUploadDropZone
              value={watch("files") ?? []}
              onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
              rounded={false}
              isThumbnail={false}
            />
          </article>
          <article className="border-r border-dark dark:border-gray p-4">{props.winRate}</article>
          <article className="p-4">
            <FormAction />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
