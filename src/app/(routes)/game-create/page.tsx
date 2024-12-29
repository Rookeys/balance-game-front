"use client"
import { Button } from "@/components/Button"
import { InputLabel } from '@/components/form/_components'
import InputTextUnControlled from '@/components/form/inputText/InputTextUnControlled'
import RadioGroup from '@/components/form/radioGroup/RadioGroup'
import Select from '@/components/form/select/Select'
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
    <section className="flex justify-center px-[16px] mt-[80px]">
      <form
        className="flex flex-col justify-center items-start w-full max-w-[500px] gap-[28px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputTextUnControlled className="w-full" id="title" label="제목" {...register("title")} />
        <InputTextUnControlled className="w-full" id="description" label="설명" {...register("description")} />
        <article className="flex flex-col gap-[4px]">
          <InputLabel label="카테고리 선택" />
          <Controller
            name="category"
            control={control}
            render={({ field }) => <Select {...field} items={categoryItems} />}
          />
        </article>
        <article className="flex flex-col gap-[4px]">
          <InputLabel label="제작자 표시 (익명으로 설정 시 팔로워들이 확인할 수 없습니다)" />
          <Controller
            name="isNamePublic"
            control={control}
            render={({ field }) => <RadioGroup {...field} items={isNamePublicItems} />}
          />
        </article>
        <article className="flex flex-col gap-[4px]">
          <InputLabel label="게임공개" />
          <Controller
            name="gameAccessType"
            control={control}
            render={({ field }) => <RadioGroup {...field} items={gameAccessTypeItems} />}
          />
        </article>
        <Button type="submit">제출하기</Button>
      </form>
    </section>
  )
}
