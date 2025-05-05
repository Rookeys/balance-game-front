import MyCreatedGameList from "./_components/MyCreatedGameList"
import ProfileSection from "./_components/ProfileSection"

export default function MyPage() {
  return (
    <section className="mt-[20px] flex justify-center px-[16px] md:mt-[40px] md:px-[24px] lg:px-0">
      <section className="flex w-full max-w-[1200px] flex-col gap-[28px] md:gap-[40px]">
        <article className="rounded-[12px] border border-line-normal bg-background px-[16px] py-[20px]">
          <ProfileSection />
        </article>
        <MyCreatedGameList />
      </section>
    </section>
  )
}
