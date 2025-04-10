import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"

export default function PlayNow() {
  const { id } = useParams()
  return (
    <>
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p>이 콘텐츠가 왜 인기 있는지 궁금하다면? 지금 바로 플레이해 보세요!</p>
      <Link
        href={`/game/${id}`}
        className="inline-flex items-center justify-center rounded-[12px] bg-black px-[16px] py-[8px] text-white"
      >
        플레이하기
      </Link>
      {/* <Button className="bg-black text-white">플레이하기</Button> */}
    </>
  )
}
