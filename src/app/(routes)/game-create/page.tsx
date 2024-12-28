"use client"
import { Button } from "@/components/Button"
import InputTextUnControlled from "@/components/InputText/InputTextUnControlled"
import RadioGroup from "@/components/radioGroup/RadioGroup"
import Select from "@/components/select/Select"
import type { FieldValues } from "react-hook-form"
import { Controller, useForm } from "react-hook-form"

type PostGameRequestType = {
  title: string
  description: string
  category: string
  isNamePublic: string
  gameAccessType: "public" | "partial" | "private"
  inviteCode: string
}

const categoryItems: SelectOptionType[] = [
  { id: "entertainment", value: "entertainment", label: "연예" },
  { id: "memories", value: "memories", label: "추억" },
  { id: "other", value: "other", label: "기타" }
]

const isNamePublicItems: SelectOptionType[] = [
  { id: "name_public", value: "true", label: "공개" },
  { id: "name_private", value: "false", label: "비공개" }
]

const gameAccessTypeItems: SelectOptionType[] = [
  { id: "game_public", value: "public", label: "공개" },
  { id: "game_partial", value: "partial", label: "일부공개" },
  { id: "game_private", value: "private", label: "비공개" }
]

export default function GameCreatePage() {
  const { register, handleSubmit, control } = useForm<PostGameRequestType>()

  const onSubmit = async (data: FieldValues) => {
    console.log("data", data)
  }

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputTextUnControlled id="title" label="제목" {...register("title")} />
        <InputTextUnControlled id="description" label="설명" {...register("description")} />
        <Controller
          name="category"
          control={control}
          render={({ field }) => <Select {...field} items={categoryItems} />}
        />
        <Controller
          name="isNamePublic"
          control={control}
          render={({ field }) => <RadioGroup {...field} items={isNamePublicItems} />}
        />
        <Controller
          name="gameAccessType"
          control={control}
          render={({ field }) => <RadioGroup {...field} items={gameAccessTypeItems} />}
        />
        <Button type="submit">제출하기</Button>
      </form>
    </section>
  )
}
