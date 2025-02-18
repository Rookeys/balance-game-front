import { z } from "zod"

export const postYoutubeMediaSchema = z.object({
  url: z.string().nonempty({ message: "URL은 필수입니다." }).url({ message: "올바르지 않은 URL 형식입니다." }),
  start: z.number().optional(),
  end: z.number().optional()
})

export type PostYoutubeMediaType = z.output<typeof postYoutubeMediaSchema>
