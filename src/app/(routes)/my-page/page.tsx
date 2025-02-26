import { Suspense } from "react"
import InfiniteScrollClient from "./_components/InfiniteScrollClient"
import MyPageClient1 from "./_components/MyPageClient1"
import MyPageClient2 from "./_components/MyPageClient2"

export default async function Page() {
  // const { data: profileData } = useGetProfile()
  // const { data: myGameListData } = useGetMyGameList()

  return (
    <section>
      <p>테스트 마이페이지</p>
      <Suspense fallback={<p>테스트트트트1</p>}>
        <MyPageClient1 />
      </Suspense>
      <Suspense fallback={<p>테스트트트트2</p>}>
        <MyPageClient2 />
      </Suspense>
      <InfiniteScrollClient />
    </section>
  )
}
