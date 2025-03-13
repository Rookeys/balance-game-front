"use client"
import { useGetProfileSuspense } from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { useSession } from "next-auth/react"

export default function ExampleClient1() {
  const { data: profileData } = useGetProfileSuspense()
  // const { data: profileData } = useGetProfile()
  const { data: session } = useSession()
  console.log("session", session)
  // console.log("profileData", profileData)
  console.log(profileData.nickname)

  return <div>{profileData.email}</div>
}
