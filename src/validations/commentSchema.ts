import { z } from "zod"

export const gameCommentSchema = z.object({
  comment: z
    .string({
      required_error: "댓글은 필수입니다."
    })
    .min(1, "댓글은 필수입니다.") // 빈 문자열 방지
})

export type GameCommentType = z.output<typeof gameCommentSchema>
