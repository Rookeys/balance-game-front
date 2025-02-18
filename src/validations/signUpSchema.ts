import { z } from "zod"

export const signUpSchema = z.object({
  nickname: z.string().max(10, "닉네임은 10자 이내로 작성해주세요.").nonempty("닉네임은 필수입니다."),
  files: z.array(z.instanceof(File)).optional().nullable()
})

export type PostSignUpSchema = z.output<typeof signUpSchema>
