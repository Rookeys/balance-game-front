import {
  getGetCommentsByGameResultQueryKey,
  useAddResultComment
} from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GameResultCommentRequest } from "@/api/orval/model/gameResultCommentRequest"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import { gameCommentSchema } from "@/validations/commentSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"

export default function GameCommentForm() {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const {
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<GameResultCommentRequest>({
    values: {
      comment: ""
    },
    resolver: zodResolver(gameCommentSchema)
  })

  const { mutateAsync } = useAddResultComment()

  const onSubmit = async (data: GameResultCommentRequest) => {
    await mutateAsync({ gameId: Number(id), data })
    reset()
    await queryClient.invalidateQueries({ queryKey: getGetCommentsByGameResultQueryKey(Number(id)) })
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextareaWithSubmit
        id="comment"
        value={watch("comment")}
        onChange={(e) => setValue("comment", e.target.value, { shouldValidate: true })}
        disableEnter
        maxLength={500}
        inputClassName="!min-h-[100px]"
        placeholder="해당 콘텐츠와 관련된 댓글을 작성해 주세요."
        disabled={isSubmitting}
      />
    </form>
  )
}
