"use client"

import { ImageUploadForm, VideoUploadForm } from './_components'

export default function Medias() {
  return (
    <section className="flex flex-col items-center px-[16px] my-[80px] gap-[60px]">
      <ImageUploadForm />
      <VideoUploadForm />
    </section>
  )
}
