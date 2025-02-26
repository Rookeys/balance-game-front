"use client"
import { useSaveGame } from "@/api/orval/game-room-controller/game-room-controller"
import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { GameRequestCategory } from "@/api/orval/model/gameRequestCategory"
import { Button } from "@/components/Button"
import { InputErrorMessage, InputLabel } from "@/components/form/_components"
import InputTextUnControlled from "@/components/form/inputText/InputTextUnControlled"
import RadioGroup from "@/components/form/radioGroup/RadioGroup"
import Select from "@/components/form/select/Select"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { parseBoolean } from "@/utils/parseBoolean"
import { postGameSchema, PostGameType } from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

const categoryItems: SelectOptionType[] = [
  { id: "fun", value: GameRequestCategory.FUN, label: "재미" },
  { id: "horror", value: GameRequestCategory.HORROR, label: "공포" },
  { id: "hot", value: GameRequestCategory.HOT, label: "유행" }
]

const isNamePublicItems: SelectOptionType[] = [
  { id: "name_public", value: "true", label: "공개" },
  { id: "name_private", value: "false", label: "비공개" }
]

const gameAccessTypeItems: SelectOptionType[] = [
  { id: GameRequestAccessType.PUBLIC, value: GameRequestAccessType.PUBLIC, label: "공개" },
  { id: GameRequestAccessType.PROTECTED, value: GameRequestAccessType.PROTECTED, label: "일부공개" },
  { id: GameRequestAccessType.PRIVATE, value: GameRequestAccessType.PRIVATE, label: "비공개" }
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
      category: GameRequestCategory.FUN,
      namePublic: "true",
      accessType: GameRequestAccessType.PUBLIC,
      inviteCode: ""
    },
    resolver: zodResolver(postGameSchema)
  })

  const asyncPush = useAsyncRoutePush()

  const { mutateAsync } = useSaveGame()

  const onSubmit = async (data: PostGameType) => {
    try {
      const requestData = { ...data, namePublic: parseBoolean(data.namePublic) } satisfies GameRequest

      const res = await mutateAsync({ data: requestData })
      // await sleep(1000)
      await asyncPush(`/game-create/${res}/medias`)
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
            name="namePublic"
            control={control}
            render={({ field }) => <RadioGroup {...field} items={isNamePublicItems} />}
          />
        </article>
        <article className="flex flex-col gap-[4px]">
          <InputLabel label="게임공개" />
          <Controller
            name="accessType"
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
