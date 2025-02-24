import { serverInstance } from "@/api/serverInstance"
import { getGetProfileQueryKey } from "@/api/user-profile-controller/user-profile-controller"
import { log } from "@/utils/log"
import { sleep } from "@/utils/sleep"
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"
import { notFound } from "next/navigation"
import ExampleClient from "./ExampleClient"

export default async function MyPageClient() {
  // const { data: profileData } = useGetProfileSuspense()
  // console.log("profileData", profileData)

  const queryClient = new QueryClient()

  try {
    // await Promise.all([
    await sleep(2000)
    await queryClient.fetchQuery({
      queryKey: getGetProfileQueryKey(),
      queryFn: async () => {
        const { data } = await serverInstance.get(`/api/v1/users/profile`)
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
      <ExampleClient />
    </HydrationBoundary>
  )
}
