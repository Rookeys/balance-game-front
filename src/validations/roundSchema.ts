import { z } from "zod"

export const postRoundSchema = z.object({
  round: z.string({
    required_error: "라운드값은 필수입니다."
  })
})

export type PostRoundType = z.output<typeof postRoundSchema>
