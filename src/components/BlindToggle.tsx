"use client"
import { setBlindCookie } from "@/lib/cookies/noBlindCookie"
import { CookieContext } from "@/lib/providers/CookieProvider"
import { Eye, EyeClosed } from "lucide-react"
import { useContext } from "react"
import { Button } from "./Button"

export default function BlindToggle() {
  const { noBlind } = useContext(CookieContext)
  return (
    <Button
      onClick={async () => {
        await setBlindCookie(!noBlind)
      }}
      variant="custom"
      className="rounded-[1000px] border border-line-normal p-[8px] text-label-normal"
    >
      {!noBlind ? <EyeClosed size={24} /> : <Eye size={24} />}
    </Button>
  )
}
