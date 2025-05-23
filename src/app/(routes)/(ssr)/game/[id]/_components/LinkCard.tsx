import Image from "next/image"
import Link from "next/link"

interface Params {
  title: string
  image: string
  alt: string
  href: string
}

export default function LinkCard({ title, image, alt, href }: Params) {
  return (
    <Link href={href} className="flex w-full cursor-pointer flex-col rounded-[12px] border bg-gray-100 p-[16px]">
      <p className="text-body2-bold">{title}</p>
      <Image src={image} width={60} height={60} alt={alt} className="self-end" />
    </Link>
  )
}
