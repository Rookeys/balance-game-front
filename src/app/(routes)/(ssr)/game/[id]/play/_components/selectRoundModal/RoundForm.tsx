"use client"
import { useCreatePlayRoom } from "@/api/orval/client/game-play-controller/game-play-controller"
import { GamePlayRoundRequest } from "@/api/orval/model/gamePlayRoundRequest"
import { Button } from "@/components/Button"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { setPlayIdCookie } from "@/lib/cookies/playIdCookie"
import { cn } from "@/utils/cn"
import { generateRounds } from "@/utils/generateRounds"
import { postRoundSchema } from "@/validations/roundSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useParams } from "next/navigation"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import { Dropdown } from "./Dropdown"

interface Params {
  totalItem: number
}

export default function RoundForm({ totalItem }: Params) {
  const { id } = useParams()
  const { mutateAsync: playGame } = useCreatePlayRoom()

  const asyncPush = useAsyncRoutePush()

  const {
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting }
  } = useForm<GamePlayRoundRequest>({
    resolver: zodResolver(postRoundSchema)
  })

  const onSubmit = async (data: GamePlayRoundRequest) => {
    try {
      const res = await playGame({ gameId: Number(id), data })
      await setPlayIdCookie(res.playId as number, id as string)
      await asyncPush(`/game/${id}/play`)
    } catch {
      toast.error("오류가 발생했습니다.")
    }
  }

  return (
    <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="roundNumber"
        control={control}
        render={({ field }) => (
          <Dropdown
            options={generateRounds(totalItem)}
            value={field.value}
            onChange={field.onChange}
            placeholder="라운드 선택"
          />
        )}
      />
      {/* <Dropdown options={generateRounds(totalItem)} onChange={(e) => console.log("e", e)} /> */}
      <article className={cn("mt-[16px] flex", watch("roundNumber") ? "justify-between" : "justify-end")}>
        {watch("roundNumber") && (
          <p className="text-label-regular text-label-alternative">
            총 {totalItem}개의 콘텐츠 중 랜덤 콘텐츠 {watch("roundNumber")}개가 대결할 거예요.
          </p>
        )}
        <Button className="px-[28px] py-[12px]" disabled={isSubmitting} type="submit">
          시작
        </Button>
      </article>
    </form>
  )
}
