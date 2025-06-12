import Image, { type ImageProps } from "next/image"
import Link from "next/link"

interface Params extends ImageProps {
  href: string
  label: string
}

export default function CategoryBox({ href, label, ...props }: Params) {
  return (
    <Link href={href}>
      <section className="transition-color-custom flex h-[88px] w-[66px] items-center justify-center rounded-[12px] p-[12px] hover:bg-fill-normal md:h-[92px] md:w-[73px]">
        <article className="flex flex-col items-center gap-[8px]">
          <Image {...props} width={40} height={40} alt={props.alt ?? "category"} />
          {/* <div className="h-[80px] w-[80px] bg-gray-30" /> */}
          <p className="whitespace-nowrap text-caption1-medium md:text-label-medium">{label}</p>
        </article>
      </section>
    </Link>
  )
}
