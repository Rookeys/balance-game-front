import { z } from "zod"

export const postYoutubeMediaSchema = z.object({
  url: z.string().nonempty({ message: "URL은 필수입니다." }).url({ message: "올바르지 않은 URL 형식입니다." }),
  startSec: z.number().optional(),
  endSec: z.number().optional()
})

export type PostYoutubeMediaType = z.output<typeof postYoutubeMediaSchema>
