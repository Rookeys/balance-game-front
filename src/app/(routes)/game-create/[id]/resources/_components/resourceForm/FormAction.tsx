"use client"
import { Button } from "@/components/Button"
import { FilePenLine, Trash2 } from "lucide-react"

export default function FormAction() {
  return (
    <div className="flex justify-around gap-[4px] items-center h-full flex-wrap">
      <Button type="submit" variant="custom">
        <FilePenLine />
      </Button>
      <Button type="button" variant="custom" onClick={() => console.log("삭제")}>
        <Trash2 />
      </Button>
    </div>
  )
}
