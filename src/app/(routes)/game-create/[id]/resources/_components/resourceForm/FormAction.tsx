"use client"
import { Button } from "@/components/Button"
import { FilePenLine, Trash2 } from "lucide-react"
import dynamic from "next/dynamic"
import { useState } from "react"

const ConfirmModal = dynamic(() => import("@/components/modal/ConfirmModal"))

interface Params {
  id: number
  name?: string
}

export default function FormAction({ id, name = "" }: Params) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <div className="flex justify-around gap-[4px] items-center h-full flex-wrap">
      <Button type="submit" variant="custom">
        <FilePenLine />
      </Button>
      <Button type="button" variant="custom" onClick={() => setIsOpen(true)}>
        <Trash2 />
      </Button>
      {isOpen && (
        <ConfirmModal
          title="삭제"
          description={`${name} 데이터를 삭제 하시겠습니까?`}
          onClose={() => setIsOpen(false)}
          overlayClose
          onClick={() => console.log("삭제", id)}
        />
      )}
    </div>
  )
}
