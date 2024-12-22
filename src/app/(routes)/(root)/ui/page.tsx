"use client"
import { Button } from "@/components/Button"
import FileUploadDropzone from "@/components/file-upload/FileUploadDropzone"
import { FieldValues, useForm } from "react-hook-form"
import { toast } from "sonner"

export default function UI() {
  const {
    watch,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({})

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit" className="px-[4px] py-[8px]">
        제출
      </Button>
      <FileUploadDropzone
        value={watch("files") ?? []}
        onValueChange={(files) => setValue("files", files, { shouldValidate: true })}
      />
      <button type="button" onClick={() => toast.success("토스트 테스트")}>
        토스트 테스트
      </button>
    </form>
  )
}

// "use client"
// import { Button } from "@/components/Button"
// import InputTextControlled from "@/components/InputText/InputTextControlled"
// import { PostGameType } from "@/validations/gameSchema"
// import { FieldValues, useForm } from "react-hook-form"
// import { toast } from "sonner"

// export default function UI() {
//   const {
//     watch,
//     setValue,
//     handleSubmit,
//     formState: { errors }
//   } = useForm<PostGameType>({
//     // resolver: zodResolver(gameSchema)
//   })

//   const onSubmit = (data: FieldValues) => {
//     console.log(data)
//   }

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <InputTextControlled
//         id="title"
//         value={watch("title") ?? ""}
//         onChange={(e) => {
//           setValue("title", e.target.value, { shouldValidate: true })
//         }}
//         required
//         label="제목"
//         placeholder="제목을 입력해주세요"
//         errorMessage={errors.title?.message}
//       />
//       <Button type="submit" className="px-[4px] py-[8px]">
//         제출
//       </Button>
//       <button type="button" onClick={() => toast.success("토스트 테스트")}>
//         토스트 테스트
//       </button>
//     </form>
//   )
// }
