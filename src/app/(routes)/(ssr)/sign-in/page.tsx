import SignInPageClient from "./_components/SignInPageClient"

export const dynamic = "force-static"

export default function SignIn() {
  return (
    <section className="my-[25vh] flex justify-center">
      <SignInPageClient />
    </section>
  )
}
