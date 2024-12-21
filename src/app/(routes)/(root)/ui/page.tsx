"use client"
import InputTextControlled from "@/components/InputText/InputTextControlled"
import InputTextUnControlled from "@/components/InputText/InputTextUnControlled"
import { zodResolver } from '@hookform/resolvers/zod'
import { FieldValues, useForm } from "react-hook-form"
import { z } from 'zod'

export default function UI() {

  const schema = z.object({
    title: z.string().min(10, "title은 10글자 이상이어야 합니다."), // title1은 10글자 이상
    title1: z.string().max(10,  "title1는 10글자 이하여야 합니다.") // title2는 10글자 이하
  })

  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      title1: "",
    }
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputTextUnControlled
        {...register("title", { required: "제목은 필수 항목입니다." })}
        id="title"
        label="제목"
        placeholder="제목을 입력해주세요"
        required
        errorMessage={errors.title?.message}
      />
      <InputTextControlled
        id="title1"
        value={watch("title1") ?? ""}
        onChange={(e) => {
          setValue("title1", e.target.value, { shouldValidate: true })
        }}
        required
        label="제목"
        placeholder="제목을 입력해주세요"
        errorMessage={errors.title1?.message}
      />
      <button type="submit">제출</button>
    </form>
  )
}
