"use client"
import {
  getGetGameStatusQueryKey,
  useGetGameStatus,
  useSaveGame,
  useUpdateGameStatus
} from "@/api/orval/client/game-room-controller/game-room-controller"
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
import {
  categoryItems,
  gameAccessTypeItems,
  isNamePublicItems,
  postGameSchema,
  PostGameType
} from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

export default function GameForm() {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { data } = useGetGameStatus(Number(id), { query: { enabled: !!id } })

  const normalizedData = {
    title: data?.title ?? "",
    description: data?.description ?? "",
    category: data?.category ?? GameRequestCategory.FUN,
    namePublic: String(data?.namePublic ?? "true"),
    accessType: data?.accessType ?? GameRequestAccessType.PUBLIC,
    inviteCode: data?.inviteCode ?? ""
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<PostGameType>({
    values: normalizedData,
    resolver: zodResolver(postGameSchema)
  })

  const asyncPush = useAsyncRoutePush()

  const { mutateAsync: CreateGame } = useSaveGame()
  const { mutateAsync: UpdateGame } = useUpdateGameStatus()

  const onSubmit = async (data: PostGameType) => {
    try {
      const requestData = { ...data, namePublic: parseBoolean(data.namePublic) } satisfies GameRequest

      if (id) {
        await UpdateGame({ gameId: Number(id), data: requestData })
        queryClient.invalidateQueries({ queryKey: getGetGameStatusQueryKey(Number(id)) })
        await asyncPush(`/game-create/${id}/medias`)
      } else {
        const res = await CreateGame({ data: requestData })
        await asyncPush(`/game-create/${res}/medias`)
      }
    } catch {
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  return (
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
  )
}
