import Image from "next/image"

interface Params {
  title: string
  image: string
  alt: string
}

export default function StatCard({ title, image, alt }: Params) {
  return (
    <div className="flex w-full flex-col rounded-[12px] border bg-gray-10 p-[16px]">
      <p>{title}</p>
      <Image src={image} width={60} height={60} alt={alt} className="self-end" />
    </div>
  )
}
