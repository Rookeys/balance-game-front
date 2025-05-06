import { z } from "zod"

export const reportGameSchema = z
  .object({
    sexual: z.boolean(),
    hateful: z.boolean(),
    copyright: z.boolean(),
    etc: z.boolean(),
    etcReason: z.string().optional()
  })
  .refine((data) => data.sexual || data.hateful || data.copyright || data.etc, {
    message: "하나 이상의 신고 사유를 선택해야 합니다.",
    path: []
  })

export const reportCommentSchema = z
  .object({
    abuse: z.boolean(),
    sexual: z.boolean(),
    ad: z.boolean(),
    papering: z.boolean(),
    notRelated: z.boolean(),
    etc: z.boolean(),
    etcReason: z.string().optional()
  })
  .refine((data) => data.abuse || data.sexual || data.ad || data.papering || data.notRelated || data.etc, {
    message: "하나 이상의 신고 사유를 선택해야 합니다.",
    path: []
  })

export type ReportGameType = z.infer<typeof reportGameSchema>

export type ReportCommentType = z.infer<typeof reportCommentSchema>
