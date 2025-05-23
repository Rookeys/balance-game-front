import ProfileEditPageClient from "./ProfileEditPageClient"

export default function ProfileEditPage() {
  return (
    <section className="mt-[20px] flex justify-center px-[16px] md:mt-[40px]">
      <article className="flex w-full max-w-[500px] flex-col gap-[28px] md:gap-[40px]">
        <p className="font-sb-aggro-medium text-heading-4 md:text-heading-3">프로필 수정</p>
        <ProfileEditPageClient />
      </article>
    </section>
  )
}
