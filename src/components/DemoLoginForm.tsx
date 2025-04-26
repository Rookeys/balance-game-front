"use client"

import { signIn } from "next-auth/react"
import { useState } from "react"
import { useForm } from "react-hook-form"

type DemoSignInRequest = {
  secret: string
}

export default function DemoLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useForm<DemoSignInRequest>()
  const [serverError, setServerError] = useState("")

  const onSubmit = async (data: DemoSignInRequest) => {
    setServerError("")

    const res = await fetch("/api/demo-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ secret: data.secret })
    })

    if (!res.ok) {
      setServerError("시크릿이 올바르지 않거나 관리자 로그인에 실패했습니다.")
      return
    }

    const result = await res.json()

    await signIn("credentials", {
      redirect: true,
      accessToken: result.accessToken,
      refreshToken: result.refreshToken,
      accessTokenExpiresAt: String(result.accessTokenExpiresAt),
      refreshTokenExpiresAt: String(result.refreshTokenExpiresAt),
      nickname: result.nickname,
      image: result.image ?? "",
      callbackUrl: "/"
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mt-[16px] flex flex-col gap-[8px]">
      <input
        type="password"
        placeholder="관리자 암호 입력"
        {...register("secret", { required: "시크릿을 입력해주세요." })}
        className="rounded w-full rounded-[12px] border px-[16px] py-[8px]"
      />
      {errors.secret && <p className="text-[14px] text-red-500">{errors.secret.message}</p>}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded transition-color-custom w-full rounded-[12px] bg-blue-50 px-[16px] py-[8px] text-white hover:bg-blue-600 disabled:bg-gray-400"
      >
        {isSubmitting ? "로그인 중..." : "관리자 로그인"}
      </button>

      {serverError && <p className="text-[14px] text-red-500">{serverError}</p>}
    </form>
  )
}
