"use client"

import { Button } from "@/components/Button"
import { useParams, useRouter } from "next/navigation"
import { ImageUploadForm, YoutubeUploadForm } from "./_components"

export default function Medias() {
  const router = useRouter()
  const { id } = useParams()

  return (
    <section className="my-[80px] flex flex-col items-center gap-[60px] px-[16px]">
      <ImageUploadForm />
      <YoutubeUploadForm />
      <Button className="bg-primary-10" onClick={() => router.push(`/game-create/${id}/resources`)}>
        다음
      </Button>
    </section>
  )
}
