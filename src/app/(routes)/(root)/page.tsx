"use client"
import { getUsersProfile } from "@/services/userProfile"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    const test = async () => {
      const res = await getUsersProfile()
      console.log("res", res)
    }
    test()
  }, [])
  return (
    <section className="flex flex-col items-center gap-[48px]">
      <article className="mt-[20px] flex flex-col items-center gap-[8px]">
        <h1 className="text-lg font-bold">밸런스 게임</h1>
        <h2 className="font-semibold">내가 만든 게임을 공유하고, 팔로워를 늘려보세요!</h2>
      </article>
    </section>
  )
}
