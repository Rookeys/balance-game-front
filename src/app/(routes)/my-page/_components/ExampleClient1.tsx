"use client"
import { useGetProfileSuspense } from "@/api/orval/client/user-profile-controller/user-profile-controller"

export default function ExampleClient1() {
  const { data: profileData } = useGetProfileSuspense()
  console.log("profileData", profileData)
  // const { data: profileData } = useGetProfile()
  // console.log("profileData", profileData)

  return <div>{profileData.email}</div>
}
