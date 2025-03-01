"use client"
import { useCreatePlayRoom } from "@/api/orval/client/game-play-controller/game-play-controller"
import { GamePlayRoundRequest } from "@/api/orval/model/gamePlayRoundRequest"
import { setPlayIdCookie } from "@/app/(routes)/game/[id]/_server/playIdCookie"
import { Button } from "@/components/Button"
import { InputErrorMessage } from "@/components/form/_components"
import Select from "@/components/form/select/Select"
import { generateRounds } from "@/utils/generateRounds"
import { postRoundSchema, type PostRoundType } from "@/validations/roundSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"

interface Params {
  totalItem: number
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function RoundForm({ totalItem }: Params) {
  const { id } = useParams()
  const { mutateAsync } = useCreatePlayRoom()

  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors }
  } = useForm<PostRoundType>({
    resolver: zodResolver(postRoundSchema)
  })

  const onSubmit = async (data: PostRoundType) => {
    try {
      const postGamePlayRoundRequest = {
        ...data,
        roundNumber: Number(data.roundNumber)
      } satisfies GamePlayRoundRequest
      const res = await mutateAsync({ gameId: Number(id), data: postGamePlayRoundRequest })
      await setPlayIdCookie(res.playId as number)
    } catch {
      toast.error("오류가 발생했습니다.")
    }
  }

  return (
    <section onSubmit={handleSubmit(onSubmit)}>
      <form className="flex flex-col gap-[12px]">
        <Controller
          name="roundNumber"
          control={control}
          render={({ field }) => <Select {...field} placeholder="라운드 선택" items={generateRounds(totalItem)} />}
        />
        {!!errors.roundNumber?.message && (
          <InputErrorMessage id={"roundNumber"} errorMessage={errors.roundNumber?.message} />
        )}
        <Button
          className="rounded self-end rounded-xsm bg-blue-40 px-4 py-2 text-sm text-white hover:bg-blue-50"
          disabled={isSubmitting}
          type="submit"
        >
          확인
        </Button>
      </form>
    </section>
  )
}
