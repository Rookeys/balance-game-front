"use client"

import { Button } from "@/components/Button"
import Select from "@/components/select/Select"
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

  const items: SelectOptionType[] = [
    { id: "1", value: "apple", label: "Apple" },
    { id: "2", value: "orange", label: "Orange" },
    { id: "3", value: "grape", label: "Grape" },
    { id: "4", value: "banana", label: "Banana" }
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button type="submit" className="px-[4px] py-[8px]">
        제출
      </Button>
      <Controller name="option" control={control} render={({ field }) => <Select {...field} items={items} />} />
      <button type="button" onClick={() => toast.success("토스트 테스트")}>
        토스트 테스트
      </button>
    </form>
  )
}
