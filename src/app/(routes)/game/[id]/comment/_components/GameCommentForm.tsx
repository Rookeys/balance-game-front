import {
  getGetCommentsByGameResultQueryKey,
  useAddResultComment
} from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GameResourceCommentRequest } from "@/api/orval/model/gameResourceCommentRequest"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import { useQueryClient } from "@tanstack/react-query"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"

export default function GameCommentForm() {
  const { id } = useParams()

  const queryClient = useQueryClient()

  const { setValue, watch, handleSubmit, reset } = useForm<GameResourceCommentRequest>({
    values: {
      comment: ""
    }
  })

  const { mutateAsync } = useAddResultComment()

  const onSubmit = async (data: GameResourceCommentRequest) => {
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
      />
    </form>
  )
}
