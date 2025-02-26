"use client"
import { useGetMyGameListSuspense } from "@/api/user-profile-controller/user-profile-controller"

export default function ExampleClient2() {
  const { data: gameData } = useGetMyGameListSuspense()
  console.log("gameData", gameData)
  // const { data: profileData } = useGetProfile()
  // console.log("profileData", profileData)

  return <div>{gameData?.content && gameData?.content?.length > 0 && gameData.content[0].title}</div>
}
