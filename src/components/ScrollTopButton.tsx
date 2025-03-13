"use client"
import { Button } from "@/components/Button"
import { ChevronUp } from "lucide-react"

export default function ScrollTopButton() {
  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
  return (
    <Button
      variant="custom"
      className="fixed bottom-[10%] end-[24px] rounded-full bg-black p-[16px] text-white"
      onClick={moveTop}
    >
      <ChevronUp size={24} />
    </Button>
  )
}
