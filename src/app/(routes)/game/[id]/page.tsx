"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SelectItemBox from "./_components/SelectItemBox"
import SelectRoundModal from "./_components/selectRoundModal"

export default function Game() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <section className="flex flex-col">
      <article className="flex items-center justify-center">
        <p className="my-[8px] text-lg font-semibold">게임 타이틀 n강 라운드/전체라운드</p>
      </article>
      <section className="flex items-center justify-center">
        <SelectItemBox url="https://avatars.githubusercontent.com/u/62785823?v=4" title="github" type="image" />
        <div className="absolute bg-white/50 z-[40] w-fit h-fit">
          <Image width={80} height={80} src={"/images/vs.png"} alt="vs icon" className="object-contain" />
        </div>
        <SelectItemBox url="https://www.youtube.com/watch?v=W3qIzaNndH4" title="youtube" type="youtube" />
      </section>
      {isOpen && (
        <SelectRoundModal title="게임 타이틀" description="게임 디스크립션" totalItem={200} setIsOpen={setIsOpen} />
      )}
    </section>
  )
}
