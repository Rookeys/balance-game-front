"use client"
import InputTextControlled from "@/components/InputText/InputTextControlled"
import InputTextUnControlled from "@/components/InputText/InputTextUnControlled"
import { FieldValues, useForm } from "react-hook-form"

export default function UI() {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
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
        {...register("title", { required: "제목은 필수 항목입니다." })} // register로 ref 전달
        id="title"
        label="제목"
        placeholder="제목을 입력해주세요"
        required
        errorMessage={errors.title?.message} // 에러 메시지 전달
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
      />
      <button type="submit">제출</button>
    </form>
  )
}
