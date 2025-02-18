import { z } from "zod"

export const youtubeMediaSchema = z.object({
  name: z.string().max(20, "제목은 20자 이내로 작성해주세요.").nonempty("제목은 필수입니다."),
  url: z.string().nonempty({ message: "URL은 필수입니다." }).url({ message: "올바르지 않은 URL 형식입니다." }),
  start: z.number().optional(),
  end: z.number().optional()
})

export type PostYoutubeMediaType = z.output<typeof youtubeMediaSchema>
