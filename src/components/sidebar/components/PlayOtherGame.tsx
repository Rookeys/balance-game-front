import Image from "next/image"
import { Button } from "@/components/Button"

export default function PlayOtherGame() {
  return (
    <>
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p>다른 월드컵도 플레이해 보세요!</p>
      <Button className="bg-black text-white">다른 월드컵 보기</Button>
    </>
  )
}
