"use client"
import { Button } from "@/components/Button"
import { useState } from "react"
import SelectRoundModal from "./_components/selectRoundModal"

export default function Game() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <section>
      <Button onClick={() => setIsOpen(true)}>테스트 버튼</Button>
      {isOpen && (
        <SelectRoundModal title="게임 타이틀" description="게임 디스크립션" totalItem={200} setIsOpen={setIsOpen} />
      )}
    </section>
  )
}
