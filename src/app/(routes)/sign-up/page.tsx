"use client"
import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import InputTextUnControlled from "@/components/form/inputText/InputTextUnControlled"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { log } from "@/utils/log"
import { sleep } from "@/utils/sleep"
import { signUpSchema } from "@/validations/signUpSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { FieldValues } from "react-hook-form"
import { useForm } from "react-hook-form"

export default function SignUp() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<{ nickname: string; files: File[] | null }>({
    defaultValues: {
      nickname: "",
      files: null
    },
    resolver: zodResolver(signUpSchema)
  })

  const asyncPush = useAsyncRoutePush()

  const onSubmit = async (data: FieldValues) => {
    try {
      log("data", data)

      // await ~~~
      await sleep(1000)

      await asyncPush("/")
    } catch {}
  }

  return (
    <section className="my-[80px] flex justify-center px-[16px]">
      <form
        className="flex w-full max-w-[500px] flex-col items-start justify-center gap-[28px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputTextUnControlled
          className="w-full"
          id="nickname"
          label="제목"
          {...register("nickname")}
          errorMessage={errors.nickname?.message}
        />
        <article className="flex w-full flex-col gap-[12px]">
          <p>프로필 이미지</p>
          <FileUploadDropZone
            value={watch("files") ?? []}
            onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
            maxFiles={1}
            multiple={false}
            thumbnailCenter
          />
        </article>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="self-end bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
        >
          제출
        </Button>
      </form>
    </section>
  )
}
