"use client"

import { getGetResourcesQueryKey } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useSaveImageForGame } from "@/api/orval/client/image-controller/image-controller"
import { useGetPreSignedUrl } from "@/api/orval/client/presigned-url-controller/presigned-url-controller"
import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "next/navigation"
import { useForm, type FieldValues } from "react-hook-form"
import { toast } from "sonner"

export function ImageUploadForm() {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { mutateAsync: RequestPresignedUrl } = useGetPreSignedUrl()

  const { mutateAsync: SaveImageResources } = useSaveImageForGame()

  const {
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm()

  const onSubmit = async (data: FieldValues) => {
    try {
      if (!data.files || data.files.length === 0) {
        toast.error("이미지를 한장 이상 업로드 해주세요")
        return
      }
      const presignedUrls = await RequestPresignedUrl({ data: { prefix: "image", length: data.files.length } })

      const res = await Promise.allSettled(
        presignedUrls.map(async (presignedUrl, i) =>
          // * 테스트용 에러발생
          // if (Math.random() < 0.5) {
          //   return Promise.reject(new Error(`랜덤 오류 발생: ${presignedUrl}`))
          // }

          axios.put(presignedUrl, data.files[i], {
            headers: {
              "Content-Type": data.files[i].type
            }
          })
        )
      )

      const imageUrls = presignedUrls.filter((_, i) => res[i].status === "fulfilled")

      const baseUrls = imageUrls.map((url) => new URL(url).origin + new URL(url).pathname)

      await SaveImageResources({ gameId: Number(id), data: { urls: baseUrls } })

      await queryClient.invalidateQueries({ queryKey: getGetResourcesQueryKey(Number(id)) })

      reset()
    } catch (error) {
      log("Upload failed", error)
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
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
