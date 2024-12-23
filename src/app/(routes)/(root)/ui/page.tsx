"use client"
import { Button } from "@/components/Button"
import { RadioItemType } from "@/components/radioGroup/_components"
import Radio from "@/components/radioGroup/RadioGroup"
import { Controller, FieldValues, useForm } from "react-hook-form"
import { toast } from "sonner"

export default function UI() {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      option: ""
    }
  })

  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }

  const items: RadioItemType[] = [
    { id: "public", value: "public", label: "공개" },
    { id: "partial", value: "partial", label: "일부공개" },
    { id: "private", value: "private", label: "비공개" }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit" className="px-[4px] py-[8px]">
        제출
      </Button>
      <Controller name="option" control={control} render={({ field }) => <Radio {...field} items={items} />} />
      <button type="button" onClick={() => toast.success("토스트 테스트")}>
        토스트 테스트
      </button>
    </form>
  )
}
