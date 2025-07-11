"use client"
import {
  getGetCountResourcesInGamesQueryKey,
  getGetResourcesUsingPageQueryKey
} from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { useSaveImageForGame } from "@/api/orval/client/image-controller/image-controller"
import { useGetPreSignedUrl } from "@/api/orval/client/presigned-url-controller/presigned-url-controller"
import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import { COLORS } from "@/styles/theme/colors"
import { log } from "@/utils/log"
import { useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { CircleAlert } from "lucide-react"
import { useParams } from "next/navigation"
import { useState } from "react"
import { useForm, type FieldValues } from "react-hook-form"
import { toast } from "sonner"

export function ImageUploadForm() {
  const { id } = useParams()
  const [clickCount, setClickCount] = useState<number>(0)

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

      await Promise.all([
        queryClient.invalidateQueries({ queryKey: getGetResourcesUsingPageQueryKey(Number(id)) }),
        queryClient.invalidateQueries({ queryKey: getGetCountResourcesInGamesQueryKey(Number(id)) })
      ])

      reset()

      toast.success("이미지 업로드를 성공했습니다.")
    } catch (error) {
      log("Upload failed", error)
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col gap-[12px]">
      <div className="flex flex-col gap-[8px]">
        <p
          className="font-sb-aggro-medium text-heading-6 md:text-heading-5"
          onClick={() => setClickCount((prev) => prev + 1)}
        >
          이미지 추가
        </p>
        <p className="text-label-regular">
          JPEG, JPG, PNG, WEBP를 지원하며 이미지당 4MB, 한 번에 최대 10장 업로드 할 수 있어요.
        </p>
      </div>
      <FileUploadDropZone
        value={watch("files") ?? []}
        onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
        disabled={isSubmitting}
        maxFiles={clickCount > 5 ? 1000 : 10}
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[4px]">
          <CircleAlert size={20} stroke={COLORS.WHITE} fill={COLORS.NEUTRAL_600} />
          <p className="text-caption1-regular text-label-alternative md:text-label-regular">
            부적절하거나 불쾌감을 주는 콘텐츠는 삭제될 수 있어요.
          </p>
        </div>
        <p className="text-label-regular">
          {watch("files")?.length ?? 0}/{clickCount > 5 ? 1000 : 10}
        </p>
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="transition-color-custom self-end rounded-[12px] bg-primary-normal px-[28px] py-[12px] hover:bg-primary-hover"
      >
        저장
      </Button>
    </form>
  )
}
