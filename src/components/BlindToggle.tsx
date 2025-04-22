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
    >
      {!noBlind ? <EyeClosed /> : <Eye />}
    </Button>
  )
}
