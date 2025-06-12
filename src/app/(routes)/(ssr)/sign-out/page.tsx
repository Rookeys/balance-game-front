import { Metadata } from "next"
import SignOutPageClient from "./_components/SignOutPageClient"

export const metadata: Metadata = {
  title: "로그아웃",
  robots: {
    index: false,
    follow: false
  }
}

export default function SignOutPage() {
  return (
    <section className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <SignOutPageClient />
    </section>
  )
}
