import { GameResourceRequestType } from "@/api/orval/model/gameResourceRequestType"
import { z } from "zod"

export const putGameImageResourceSchema = z.object({
  title: z.string().min(1, "제목은 필수입니다"),
  type: z.enum([GameResourceRequestType.IMAGE]),
  files: z.array(z.instanceof(File)).optional().nullable()
})

export type PutImageResourceType = z.output<typeof putGameImageResourceSchema>
