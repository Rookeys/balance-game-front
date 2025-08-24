"use client"

import { useState } from "react"
import MyCreateGameList from "./MyCreateGameList"
import MyPlayGameList from "./MyPlayGameList"
import TabButton from "./TabButton"

const tabs = [
  { keyword: "play", label: "내가 플레이한 월드컵" },
  { keyword: "create", label: "내가 만든 월드컵" }
] as const

export default function MyPageListSection() {
  const [tab, setTab] = useState<"play" | "create">("play")
  return (
    <section>
      <article className="mb-[24px] flex">
        {tabs.map(({ keyword, label }) => (
          <TabButton key={keyword} keyword={keyword} current={tab} label={label} onClick={() => setTab(keyword)} />
        ))}
      </article>
      {tab === "play" && <MyPlayGameList />}
      {tab === "create" && <MyCreateGameList />}
    </section>
  )
}
