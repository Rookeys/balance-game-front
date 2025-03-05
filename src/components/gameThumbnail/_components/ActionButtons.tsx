"use client"
import { Button } from "@/components/Button"
import { share } from "@/utils/share"
import Link from "next/link"
import { useRouter } from "next/navigation"
interface Params {
  id?: number
}
export function ActionButtons({ id }: Params) {
  const router = useRouter()
  return (
    <article className="flex flex-wrap">
      <Button
        className="bg-primary text-sm text-light hover:bg-primary-60 dark:bg-primary-70 dark:hover:bg-primary-80"
        onClick={() => router.push(`/game/${id}`)}
      >
        게임시작
      </Button>
      <Button
        asChild
        className="bg-gray-10 text-sm text-dark-30 hover:bg-gray-20 dark:bg-gray-70 dark:text-light dark:hover:bg-gray-80"
      >
        <Link href={`/game/${id}/ranking`}>🔥 랭킹확인</Link>
      </Button>
      <Button
        className="bg-blue text-sm text-light hover:bg-blue-60 dark:bg-blue-70 dark:hover:bg-blue-80"
        onClick={() =>
          share({ title: "KoJaem's Github", text: "KoJaem 깃허브로 초대합니다", url: "https://kojaem.me" })
        }
      >
        공유하기
      </Button>
    </article>
  )
}
