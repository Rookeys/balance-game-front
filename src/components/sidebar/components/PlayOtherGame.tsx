"use client"
import { Button } from "@/components/Button"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function PlayOtherGame() {
  const router = useRouter()
  return (
    <>
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p className="text-center font-sb-aggro-medium text-heading-5">다른 월드컵도 플레이해 보세요!</p>
      <Button
        onClick={() => router.push("/")}
        className="border border-primary-normal bg-background text-primary-on-primary hover:bg-background"
      >
        다른 월드컵 보기
      </Button>
    </>
  )
}
