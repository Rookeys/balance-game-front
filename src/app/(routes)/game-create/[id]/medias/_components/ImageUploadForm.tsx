"use client"

import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import { FieldValues, useForm } from "react-hook-form"

export function ImageUploadForm() {
  const { watch, setValue, handleSubmit } = useForm({})

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-[500px] gap-[28px]">
      <p>이미지 업로드</p>
      <FileUploadDropZone
        value={watch("files") ?? []}
        onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
      />
      <Button
        type="submit"
        className="bg-primary hover:bg-primary-60 text-light dark:bg-primary-70 dark:hover:bg-primary-80 self-end"
      >
        저장
      </Button>
    </form>
  )
}
