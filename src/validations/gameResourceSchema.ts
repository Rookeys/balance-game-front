import { GameResourceRequestType } from "@/api/orval/model/gameResourceRequestType"
import { z } from "zod"

export const putGameImageResourceSchema = z.object({
  title: z.string().min(1, "제목은 필수입니다"),
  type: z.enum([GameResourceRequestType.IMAGE]),
  files: z.array(z.instanceof(File)).optional().nullable()
})

export type PutGameImageResourceType = z.output<typeof putGameImageResourceSchema>

export const putGameYoutubeResourceSchema = z.object({
  title: z.string().min(1, "제목은 필수입니다"),
  type: z.enum([GameResourceRequestType.LINK]),
  content: z.string().nonempty({ message: "URL은 필수입니다." }).url({ message: "올바르지 않은 URL 형식입니다." }),
  startSec: z.number().optional(),
  endSec: z.number().optional()
})

export type PutGameYoutubeResourceType = z.output<typeof putGameYoutubeResourceSchema>
