import { Button } from "@/components/Button"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

interface Params {
  text?: string
}

export default function PlayNow({ text = "지금 바로 플레이해 보세요!" }: Params) {
  const { id } = useParams()
  const router = useRouter()
  return (
    <section className="flex flex-col items-center gap-[20px] rounded-[12px] border px-[16px] py-[20px]">
      <Image src={"/images/icons/trophy_3d.webp"} width={80} height={80} alt="trophy-icon" />
      <p className="whitespace-pre-line text-center font-sb-aggro-medium text-heading-5">{text}</p>
      <Button onClick={() => router.push(`/game/${id}`)} className="inline-flex items-center justify-center">
        플레이하기
      </Button>
      {/* <Button className="bg-black text-white">플레이하기</Button> */}
    </section>
  )
}
