"use client"

import { useRouter, useSearchParams } from "next/navigation"
import MyCreateGameList from "./MyCreateGameList"
import MyPlayGameList from "./MyPlayGameList"
import TabButton from "./TabButton"

const tabs = [
  { keyword: "play", label: "내가 플레이한 월드컵" },
  { keyword: "create", label: "내가 만든 월드컵" }
] as const

export default function MyPageListSection() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // 쿼리 파라미터에서 탭 상태 가져오기 (기본값: "play")
  const currentTab = (searchParams.get("tab") as "play" | "create") || "play"

  // 탭 변경 핸들러 - URL 쿼리 파라미터 업데이트
  const updateTab = (tab: "play" | "create") => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("tab", tab)
    router.push(`?${params.toString()}`)
  }

  return (
    <section>
      <article className="mb-[24px] flex">
        {tabs.map(({ keyword, label }) => (
          <TabButton
            key={keyword}
            keyword={keyword}
            current={currentTab}
            label={label}
            onClick={() => updateTab(keyword)}
          />
        ))}
      </article>
      {currentTab === "play" && <MyPlayGameList />}
      {currentTab === "create" && <MyCreateGameList />}
    </section>
  )
}
