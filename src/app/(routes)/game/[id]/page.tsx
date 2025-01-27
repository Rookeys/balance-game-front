"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import SelectItemBox from "./_components/SelectItemBox"
import SelectRoundModal from "./_components/selectRoundModal"

export default function Game() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedId, setSelectedId] = useState<string>()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const handleSelectItem = (id: string) => {
    if (selectedId) return
    setSelectedId(id)
  }

  return (
    <section className="flex flex-col">
      <article className="flex items-center justify-center">
        <p className="my-[8px] text-lg font-semibold">게임 타이틀 n강 라운드/전체라운드</p>
      </article>
      <section className="flex min-h-[80vh] items-center justify-center">
        {/* <SelectItemBox url="https://avatars.githubusercontent.com/u/62785823?v=4" title="github" type="image" /> */}
        <SelectItemBox
          id="image-id"
          url="https://avatars.githubusercontent.com/u/62785823?v=4"
          title="github"
          type="image"
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
        <div className="pointer-events-none absolute z-[40] h-fit w-fit bg-white/50">
          <Image width={80} height={80} src={"/images/vs.png"} alt="vs icon" className="object-contain" />
        </div>
        <SelectItemBox
          id="youtube-id"
          url="https://www.youtube.com/watch?v=W3qIzaNndH4"
          title="youtube"
          type="youtube"
          selectedId={selectedId}
          handleSelectItem={handleSelectItem}
        />
      </section>
      {isOpen && (
        <SelectRoundModal title="게임 타이틀" description="게임 디스크립션" totalItem={200} setIsOpen={setIsOpen} />
      )}
    </section>
  )
}
