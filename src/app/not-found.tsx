"use client"
import { Button } from "@/components/Button"
import Footer from "@/components/Footer"
import HeaderSSG from "@/components/HeaderSSG"
import { useSessionStore } from "@/store/session"
import { signOut } from "next-auth/react"
import Image from "next/image"

export default function ErrorPage() {
  const clearSession = useSessionStore((state) => state.clearSession)
  return (
    <>
      <HeaderSSG />
      <section className="mt-[60px] flex min-h-[50vh] flex-col items-center justify-center gap-[20px] py-[60px]">
        <article className="flex flex-col items-center gap-[12px]">
          <Image src={"/images/character/pixy_error.webp"} alt="error-image" width={80} height={80} />
          <p className="font-sb-aggro-medium text-heading-5 md:text-heading-4">이런, 오류가 발생했군요</p>
          <p className="text-center text-label-regular text-label-neutral md:text-body2-regular">
            페이지를 찾을 수 없거나 서버가 원활하지 않습니다.
            <br />
            짱픽 홈으로 돌아가 볼까요?
          </p>
        </article>
        <Button
          onClick={() => {
            clearSession()
            signOut({ callbackUrl: "/" })
          }}
        >
          홈으로 돌아가기
        </Button>
      </section>
      <Footer />
    </>
  )
}
