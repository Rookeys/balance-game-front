"use client"
import { useGetProfileSuspense } from "@/api/orval/client/user-profile-controller/user-profile-controller"

export default function ExampleClient2() {
  const { data: profileData } = useGetProfileSuspense()
  // const { data: profileData } = useGetProfile()
  // console.log("profileData", profileData)

  return <div>{profileData.email}</div>
}
