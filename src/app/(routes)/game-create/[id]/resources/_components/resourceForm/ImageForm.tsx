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

  const files = watch("files")

  const url = files && Array.isArray(files) && files.length > 0 ? URL.createObjectURL(files[0]) : props.url

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section className="flex w-fit border-b border-dark dark:border-gray">
          <article className="border-r border-dark dark:border-gray w-[180px] flex-shrink-0">
            <ImageThumbnailBox
              // url={watch("files") && watch("files").length > 0 ? URL.createObjectURL(watch("files")[0]) : props.url}
              url={url}
            />
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
              isFileName={true}
              multiple={false}
              maxFiles={1}
            />
          </article>
          <article className="border-r border-dark dark:border-gray p-4 w-[180px] flex-shrink-0 flex items-center justify-center">
            <p>{props.winRate}</p>
          </article>
          <article className="p-4 w-[180px] flex-shrink-0">
            <FormAction id={props.id} name={props.name} />
          </article>
        </section>
      </form>
    </FormProvider>
  )
}
