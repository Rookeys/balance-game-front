import Image, { type ImageProps } from "next/image"
import Link from "next/link"

interface Params extends ImageProps {
  href: string
  label: string
}

export default function CategoryBox({ href, label, ...props }: Params) {
  return (
    <Link href={href}>
      <section className="flex h-[128px] w-[102px] items-center justify-center rounded-[12px] bg-gray-10 px-[24px] py-[20px]">
        <article className="flex flex-col items-center gap-[8px]">
          <Image {...props} width={76} height={76} alt="category" />
          {/* <div className="h-[80px] w-[80px] bg-gray-30" /> */}
          <p className="whitespace-nowrap">{label}</p>
        </article>
      </section>
    </Link>
  )
}
