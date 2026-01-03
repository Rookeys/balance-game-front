import {
  getGetCommentsByGameResultQueryKey,
  useAddResultComment
} from "@/api/orval/client/game-result-comments-controller/game-result-comments-controller"
import { GameResultCommentRequest } from "@/api/orval/model/gameResultCommentRequest"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import { log } from "@/utils/log"
import { requireLogin } from "@/utils/requireLogin"
import { gameCommentSchema } from "@/validations/commentSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function GameCommentForm() {
  const { id } = useParams()
  const { data: session } = useSession()

  const queryClient = useQueryClient()

  const {
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid }
  } = useForm<GameResultCommentRequest>({
    values: {
      comment: ""
    },
    resolver: zodResolver(gameCommentSchema)
  })

  const { mutateAsync: AddGameComment } = useAddResultComment()

  const onSubmit = async (data: GameResultCommentRequest) => {
    try {
      await AddGameComment({ gameId: Number(id), data })
      reset()
      await queryClient.invalidateQueries({ queryKey: getGetCommentsByGameResultQueryKey(Number(id)) })
      toast.success("댓글이 작성되었습니다.")
    } catch (error) {
      log(error)
      toast.error("댓글작성을 실패했습니다.")
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextareaWithSubmit
        onClick={() => requireLogin(session)}
        id="comment"
        value={watch("comment")}
        onChange={(e) => setValue("comment", e.target.value, { shouldValidate: true })}
        disableEnter
        maxLength={500}
        inputClassName="!min-h-[120px]"
        placeholder="콘텐츠와 관련된 댓글을 작성해 주세요."
        disabled={isSubmitting || !isValid}
      />
    </form>
  )
}
