import { Metadata } from "next"
import SignInPageClient from "./_components/SignInPageClient"

export const dynamic = "force-static"

export const metadata: Metadata = {
  title: "로그인",
  robots: {
    index: false,
    follow: false
  }
}

export default function SignIn() {
  return (
    <section className="my-[25vh] flex justify-center">
      <SignInPageClient />
    </section>
  )
}
