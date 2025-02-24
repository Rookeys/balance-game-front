"use client"
import { useGetProfileSuspense } from "@/api/user-profile-controller/user-profile-controller"

export default function ExampleClient() {
  const { data: profileData } = useGetProfileSuspense()
  console.log("profileData", profileData)

  return <div>{profileData.email}</div>
}
