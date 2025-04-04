"use client"
import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import { EllipsisVertical } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const editItems = [
  { value: "edit", label: "수정" },
  { value: "delete", label: "삭제" }
]

export default function ResourceTable() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleClick = (value: "edit" | "delete") => {
    if (value === "edit") {
      // 수정모달
    } else {
      // 삭제모달
    }
  }

  return (
    <section className="flex gap-[12px] py-[16px]">
      <div className="relative my-auto h-[100px] w-[120px]">
        <Image src={"/images/Rookeys.png"} fill alt="thumbnail" className="rounded-[8px]" />
      </div>
      <article className="flex flex-1 flex-col gap-[12px]">
        <p>유형</p>
        <p className="line-clamp-1">이름</p>
        <div className="flex flex-col">
          <ProgressBar percent={10} needIndicator={false} />
          <div className="flex items-center justify-between">
            <p>nn.n%</p>
            <p>00000번 우승</p>
          </div>
        </div>
      </article>
      <div className="relative flex items-start">
        <button
          onClick={() => {
            setIsOpen((prev) => !prev)
          }}
        >
          <EllipsisVertical />
        </button>
        {isOpen && (
          <section className="absolute end-0 top-[28px] w-[124px] divide-y rounded-[8px] border bg-white p-[8px]">
            {editItems.map((editItem) => (
              <Button
                key={editItem.value}
                variant="custom"
                className="rounded-none w-full whitespace-nowrap px-[16px] py-[12px]"
                onClick={() => {
                  handleClick(editItem.value as "edit" | "delete")
                }}
              >
                {editItem.label}
              </Button>
            ))}
          </section>
        )}
      </div>
    </section>
  )
}
