import { z } from "zod"

export const postRoundSchema = z.object({
  roundNumber: z.string({
    required_error: "라운드값은 필수입니다."
  }),
  inviteCode: z.string().optional()
})

export type PostRoundType = z.output<typeof postRoundSchema>
