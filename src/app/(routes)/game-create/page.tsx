"use client"
import { Button } from "@/components/Button"
import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import InputTextUnControlled from "@/components/form/inputText/InputTextUnControlled"
import RadioGroup from "@/components/form/radioGroup/RadioGroup"
import Select from "@/components/form/select/Select"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { sleep } from "@/utils/sleep"
import { postGameSchema, PostGameType } from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm, type FieldValues } from "react-hook-form"

// type PostGameRequestType = {
//   title: string
//   description: string
//   category: string
//   isNamePublic: string
//   gameAccessType: "public" | "partial" | "private"
//   inviteCode: string
// }

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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<PostGameType>({
    defaultValues: {
      // Todo API 연동 후 values: { ...기존데이터 } 로 수정
      title: "",
      description: "",
      category: "",
      isNamePublic: "true",
      gameAccessType: "public",
      inviteCode: ""
    },
    resolver: zodResolver(postGameSchema)
  })

  const asyncPush = useAsyncRoutePush()

  const onSubmit = async (data: FieldValues) => {
    try {
      console.log("data", data)
      // Todo API 요청 시 isNamePublicItems 관련 데이터의 value 는 boolean 으로 관리할듯함.

      // await ~~~
      await sleep(1000)

      await asyncPush("/game-create/1/medias")
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
          id="title"
          label="제목"
          {...register("title")}
          errorMessage={errors.title?.message}
        />
        <InputTextUnControlled
          className="w-full"
          id="description"
          label="설명"
          {...register("description")}
          errorMessage={errors.description?.message}
        />
        <article className="flex flex-col gap-[4px]">
          <InputLabel label="카테고리 선택" />
          <Controller
            name="category"
            control={control}
            render={({ field }) => <Select {...field} items={categoryItems} />}
          />
          {!!errors.category?.message && <InputErrorMessage id={"category"} errorMessage={errors.category?.message} />}
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
        <InputTextUnControlled
          className="w-full"
          id="inviteCode"
          label="초대코드"
          {...register("inviteCode")}
          errorMessage={errors.inviteCode?.message}
        />
        <p className="text-sm text-gray">
          ⭐️ 게임의 부적절함을 확인하기 위해 일부공개 게임은 개발자가 확인할 수 있습니다
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
        >
          다음
        </Button>
      </form>
    </section>
  )
}
