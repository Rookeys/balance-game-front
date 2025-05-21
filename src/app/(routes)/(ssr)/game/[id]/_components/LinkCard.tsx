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
    <Link
      href={href}
      className="transition-color-custom flex w-full cursor-pointer flex-col rounded-[12px] bg-fill-normal p-[16px] hover:bg-fill-strong"
    >
      <p className="text-label-bold md:text-body2-bold">{title}</p>
      <Image src={image} width={60} height={60} alt={alt} className="self-end" />
    </Link>
  )
}
