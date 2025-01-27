import KakaoLoginButton from "@/components/KakaoLoginButton"
import AuthSetting from "./_components/AuthSetting"

interface Params {
  params: Record<string, string>
  searchParams: { [key: string]: string | undefined }
}

export default async function KakaoLoginPage({ searchParams }: Params) {
  const code = searchParams.code
  if (!code) {
    return <ErrorUI />
  }

  return <AuthSetting code={code} />
}

const ErrorUI = () => (
  <section className="mt-[80px] flex flex-col items-center">
    <article className="flex w-fit flex-col gap-[16px]">
      <p className="ms-[16px]">잘못된 요청입니다. 다시 시도해주세요.</p>
      <article className="flex flex-col gap-[16px] px-[16px]">
        <KakaoLoginButton />
      </article>
    </article>
  </section>
)
