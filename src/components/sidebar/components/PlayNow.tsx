import Image from "next/image"
import { Button } from "@/components/Button"

export default function PlayNow() {
  return (
    <>
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p>이 콘텐츠가 왜 인기 있는지 궁금하다면? 지금 바로 플레이해 보세요!</p>
      <Button className="bg-black text-white">플레이하기</Button>
    </>
  )
}
