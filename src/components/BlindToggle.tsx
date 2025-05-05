"use client"
import { setBlindCookie } from "@/lib/cookies/noBlindCookie"
import { CookieContext } from "@/lib/providers/CookieProvider"
import { Eye, EyeClosed } from "lucide-react"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { toast } from "sonner"
import { Button } from "./Button"

export default function BlindToggle() {
  const { noBlind } = useContext(CookieContext)

  const pathname = usePathname()
  return (
    <Button
      onClick={async () => {
        if (pathname === "/") {
          await setBlindCookie(!noBlind)
        } else {
          toast.info("메인 페이지에서만 설정 가능합니다.")
        }
      }}
      variant="custom"
      className="rounded-[1000px] border border-line-normal p-[8px] text-label-normal"
    >
      {!noBlind ? <EyeClosed size={24} /> : <Eye size={24} />}
    </Button>
  )
}
