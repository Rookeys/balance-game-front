"use client"

import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import { log } from "@/utils/log"
import { FieldValues, useForm } from "react-hook-form"

export function ImageUploadForm() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = useForm({})

  const onSubmit = async (data: FieldValues) => {
    log("data", data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full max-w-[500px] flex-col gap-[28px]">
      <p>이미지 업로드</p>
      <FileUploadDropZone
        value={watch("files") ?? []}
        onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
      />
      <Button
        type="submit"
        disabled={isSubmitting}
        className="self-end bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
      >
        저장
      </Button>
    </form>
  )
}
