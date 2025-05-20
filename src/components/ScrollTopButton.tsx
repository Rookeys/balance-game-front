"use client"
import { Button } from "@/components/Button"
import { ArrowUp } from "lucide-react"

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
      className="fixed bottom-[24px] end-[24px] rounded-full border bg-white p-[16px] text-black shadow-emphasize"
      onClick={moveTop}
    >
      {/* <ChevronUp size={24} /> */}
      <ArrowUp size={24} />
    </Button>
  )
}
