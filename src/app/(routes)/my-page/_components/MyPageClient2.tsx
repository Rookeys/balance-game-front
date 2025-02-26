import { serverInstance } from "@/api/serverInstance"
import { getGetMyGameListQueryKey } from "@/api/user-profile-controller/user-profile-controller"
import { log } from "@/utils/log"
import { sleep } from "@/utils/sleep"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import ExampleClient2 from "./ExampleClient2"

export default async function MyPageClient2() {
  // const { data: profileData } = useGetProfileSuspense()
  // console.log("profileData", profileData)

  const queryClient = new QueryClient()

  try {
    // await Promise.all([
    await sleep(5000)
    await queryClient.fetchQuery({
      queryKey: getGetMyGameListQueryKey(),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/v1/users/games`)
        return data
      }
    })
    // ])
  } catch (error) {
    log("error", error)
    notFound()
  }
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ExampleClient2 />
    </HydrationBoundary>
  )
}
