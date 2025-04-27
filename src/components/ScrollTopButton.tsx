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
      className="fixed bottom-[10%] end-[24px] rounded-full border bg-white p-[16px] text-black"
      onClick={moveTop}
    >
      {/* <ChevronUp size={24} /> */}
      <ArrowUp size={24} />
    </Button>
  )
}
