"use client"
import { useGetGameDetails } from "@/api/orval/client/game-play-controller/game-play-controller"
import { useGetResource } from "@/api/orval/client/game-resource-controller/game-resource-controller"
import { Button } from "@/components/Button"
import Link from "next/link"
import { useParams, useSearchParams } from "next/navigation"
import ResourceItem from "./ResourceItem"

export default function GameResultPageClient() {
  const { id } = useParams()
  const searchParams = useSearchParams()
  const resourceId = searchParams.get("resourceId")

  const { data: gameRoomData } = useGetGameDetails(Number(id))

  const { data: resourceData } = useGetResource(Number(id), Number(resourceId))

  return (
    <section className="flex flex-col items-center gap-[20px]">
      <p>{gameRoomData?.title}</p>
      <p>내가 선택한 1등 {resourceData?.title}</p>
      <section className="w-full max-w-[50vw]">
        <ResourceItem content={resourceData?.content} type={resourceData?.type} />
      </section>
      <article className="flex gap-[20px]">
        <Button className="bg-primary-10" asChild>
          <Link href={"/"}>돌아가기</Link>
        </Button>
      </article>
    </section>
  )
}
