import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { GameRequestCategoriesItem } from "@/api/orval/model/gameRequestCategoriesItem"
import { getEnumValues } from "@/utils/getEnumValues"
import { z } from "zod"
export const postGameSchema = z
  .object({
    title: z.string().max(50, "제목은 50자 이내로 작성해주세요.").nonempty("제목은 필수입니다."),
    description: z.string().max(100, "설명은 100자 이내로 작성해주세요.").optional(),
    categories: z.array(z.enum(getEnumValues(GameRequestCategoriesItem))),
    isNamePrivate: z.boolean({
      required_error: "생성자 표시 여부는 필수입니다."
    }),
    isBlind: z.boolean(),
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

export const isNamePrivateItems: SelectOptionType[] = [
  { id: "is_name_private_false", value: "false", label: "공개" },
  { id: "is_name_private_true", value: "true", label: "비공개" }
]

export const gameAccessTypeItems: SelectOptionType[] = [
  { id: GameRequestAccessType.PUBLIC, value: GameRequestAccessType.PUBLIC, label: "공개" },
  { id: GameRequestAccessType.PROTECTED, value: GameRequestAccessType.PROTECTED, label: "일부공개" },
  { id: GameRequestAccessType.PRIVATE, value: GameRequestAccessType.PRIVATE, label: "비공개" }
]

export const isBlindItems: SelectOptionType[] = [
  { id: "is_blind_false", value: "false", label: "필요X" },
  { id: "is_blind_true", value: "true", label: "필요O" }
]
