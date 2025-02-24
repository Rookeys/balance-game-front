import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { Suspense } from "react"
import MyPageClient from "./_components/MyPageClient"

export default async function Page() {
  const queryClient = new QueryClient()
  // const { data: profileData } = useGetProfile()
  // const { data: myGameListData } = useGetMyGameList()

  return (
    <section>
      <p>테스트 마이페이지</p>
      <Suspense fallback={<p>테스트트트트</p>}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <MyPageClient />
        </HydrationBoundary>
      </Suspense>
    </section>
  )
}
