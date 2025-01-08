import { z } from "zod"

export const youtubeMediaSchema = z.object({
  youtubeURL: z.string().nonempty({ message: "URL은 필수입니다." }).url({ message: "올바르지 않은 URL 형식입니다." })
})

export type PostGameType = z.output<typeof youtubeMediaSchema>
