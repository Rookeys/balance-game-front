import KakaoLoginButton from "@/components/KakaoLoginButton"
import Image from "next/image"

export default function SignIn() {
  return (
    <section className="my-[25vh] flex justify-center">
      <article className="flex w-full max-w-[500px] flex-col gap-[24px] rounded-[16px] px-[16px] py-[36px]">
        <Image src={"/images/Rookeys.png"} alt="logo" width={120} height={120} className="mx-auto" />
        <div className="flex flex-col items-center gap-[16px]">
          <p>서비스명에 오신 것을 환영합니다!</p>
          <div className="text-center">
            <p>간단히 설명이 들어가는 영역입니다.</p>
            <p>최대 2줄까지 작성합니다.</p>
          </div>
        </div>
        <KakaoLoginButton className="mx-auto mt-[16px] w-full max-w-[340px]" />
      </article>
    </section>
  )
}
