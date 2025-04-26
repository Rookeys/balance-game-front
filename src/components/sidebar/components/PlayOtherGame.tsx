import Image from "next/image"
import Link from "next/link"

export default function PlayOtherGame() {
  return (
    <>
      <Image src={"/images/Rookeys.png"} width={80} height={80} alt="" />
      <p>다른 월드컵도 플레이해 보세요!</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-[12px] bg-black px-[16px] py-[8px] text-white disabled:bg-gray-500"
      >
        다른 월드컵 보기
      </Link>
    </>
  )
}
