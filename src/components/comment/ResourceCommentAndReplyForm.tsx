import {
  getGetChildrenCommentsByGameResourceQueryKey,
  getGetParentCommentsByGameResourceQueryKey,
  useAddResourceComment
} from "@/api/orval/client/game-resource-comments-controller/game-resource-comments-controller"
import { GameResourceCommentRequest } from "@/api/orval/model/gameResourceCommentRequest"
import TextareaWithSubmit from "@/components/form/textarea/TextareaWithSubmit"
import { requireLogin } from "@/utils/requireLogin"
import { gameCommentSchema } from "@/validations/commentSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import { useSession } from "next-auth/react"
import { useParams } from "next/navigation"
import { useForm } from "react-hook-form"

interface Params {
  parentId?: number
  resourceId?: number
}

export default function ResourceCommentAndReplyForm({ parentId, resourceId }: Params) {
  const { data: session } = useSession()

  const { id } = useParams()

  const queryClient = useQueryClient()

  const {
    setValue,
    watch,
    handleSubmit,
    reset,
    formState: { isSubmitting, isValid }
  } = useForm<GameResourceCommentRequest>({
    values: {
      comment: ""
    },
    resolver: zodResolver(gameCommentSchema)
  })

  const { mutateAsync } = useAddResourceComment()

  const onSubmit = async (data: GameResourceCommentRequest) => {
    await mutateAsync({ gameId: Number(id), resourceId: resourceId as number, data: { ...data, parentId } })
    reset()
    if (parentId) {
      await Promise.all([
        queryClient.invalidateQueries({
          queryKey: getGetChildrenCommentsByGameResourceQueryKey(Number(id), resourceId as number, Number(parentId))
        }),
        queryClient.invalidateQueries({
          queryKey: getGetParentCommentsByGameResourceQueryKey(Number(id), resourceId as number)
        })
      ])
    } else {
      await queryClient.invalidateQueries({
        queryKey: getGetParentCommentsByGameResourceQueryKey(Number(id), resourceId as number)
      })
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
        inputClassName="!min-h-[100px]"
        placeholder="해당 콘텐츠와 관련된 댓글을 작성해 주세요."
        disabled={isSubmitting || !isValid}
      />
    </form>
  )
}
