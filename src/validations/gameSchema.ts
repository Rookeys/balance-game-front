import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { GameRequestCategory } from "@/api/orval/model/gameRequestCategory"
import { getEnumValues } from "@/utils/getEnumValues"
import { z } from "zod"

export const postGameSchema = z
  .object({
    title: z.string().max(20, "제목은 20자 이내로 작성해주세요.").nonempty("제목은 필수입니다."),
    description: z.string().max(50, "설명은 50자 이내로 작성해주세요.").optional(),
    category: z.enum(getEnumValues(GameRequestCategory)),
    namePublic: z
      .string({
        required_error: "생성자 표시 여부는 필수입니다."
      })
      .optional(),
    accessType: z.enum(getEnumValues(GameRequestAccessType), {
      required_error: "공개 범위는 필수입니다.",
      invalid_type_error: "유효한 공개 범위를 선택해주세요."
    }),
    inviteCode: z.string().optional()
  })
  .refine(
    (data) =>
      data.accessType !== GameRequestAccessType.PROTECTED ||
      (data.accessType === GameRequestAccessType.PROTECTED && data.inviteCode),
    {
      message: "게임 공개여부가 일부공개일 경우 초대코드는 필수입니다.",
      path: ["inviteCode"]
    }
  )

export type PostGameType = z.output<typeof postGameSchema>

export const categoryItems: SelectOptionType[] = [
  { id: GameRequestCategory.FUN, value: GameRequestCategory.FUN, label: "재미" },
  { id: GameRequestCategory.HORROR, value: GameRequestCategory.HORROR, label: "공포" },
  { id: GameRequestCategory.HOT, value: GameRequestCategory.HOT, label: "유행" }
]

export const isNamePublicItems: SelectOptionType[] = [
  { id: "is_name_public", value: "true", label: "공개" },
  { id: "is_name_private", value: "false", label: "비공개" }
]

export const gameAccessTypeItems: SelectOptionType[] = [
  { id: GameRequestAccessType.PUBLIC, value: GameRequestAccessType.PUBLIC, label: "공개" },
  { id: GameRequestAccessType.PROTECTED, value: GameRequestAccessType.PROTECTED, label: "일부공개" },
  { id: GameRequestAccessType.PRIVATE, value: GameRequestAccessType.PRIVATE, label: "비공개" }
]
