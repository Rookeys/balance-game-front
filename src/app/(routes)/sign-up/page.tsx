"use client"
import { Button } from "@/components/Button"
import FileUploadDropZone from "@/components/form/fileUpload/FileUploadDropZone"
import InputTextUnControlled from "@/components/form/inputText/InputTextUnControlled"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
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
      console.log("data", data)

      // await ~~~
      await sleep(1000)

      await asyncPush("/")
    } catch {}
  }

  return (
    <section className="flex justify-center px-[16px] my-[80px]">
      <form
        className="flex flex-col justify-center items-start w-full max-w-[500px] gap-[28px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputTextUnControlled
          className="w-full"
          id="nickname"
          label="제목"
          {...register("nickname")}
          errorMessage={errors.nickname?.message}
        />
        <article className="flex flex-col gap-[12px] w-full">
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
          className="bg-primary hover:bg-primary-60 text-light dark:bg-primary-70 dark:hover:bg-primary-80 self-end"
        >
          제출
        </Button>
      </form>
    </section>
  )
}
