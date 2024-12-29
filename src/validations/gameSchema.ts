import { z } from "zod"

export const gameSchema = z
  .object({
    title: z.string().max(20, "제목은 20자 이내로 작성해주세요.").nonempty("제목은 필수입니다."),
    description: z.string().max(50, "설명은 50자 이내로 작성해주세요.").nonempty("설명은 필수입니다."),
    category: z.string().nonempty("카테고리는 필수입니다."),
    isNamePublic: z.string({
      required_error: "생성자 표시 여부는 필수입니다."
    }),
    gameAccessType: z.enum(["public", "partial", "private"], {
      required_error: "공개 범위는 필수입니다.",
      invalid_type_error: "유효한 공개 범위를 선택해주세요."
    }),
    inviteCode: z.string().nonempty("초대코드는 필수입니다.").optional()
  })
  .refine((data) => data.gameAccessType !== "partial" || (data.gameAccessType === "partial" && data.inviteCode), {
    message: "게임 공개여부가 일부공개일 경우 초대코드는 필수입니다.",
    path: ["inviteCode"]
  })

export type PostGameType = z.output<typeof gameSchema>
