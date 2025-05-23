import Image, { type ImageProps } from "next/image"
import Link from "next/link"

interface Params extends ImageProps {
  href: string
  label: string
}

export default function CategoryBox({ href, label, ...props }: Params) {
  return (
    <Link href={href}>
      <section className="flex h-[128px] w-[98px] items-center justify-center rounded-[12px] bg-fill-normal p-[12px]">
        <article className="flex flex-col items-center gap-[8px]">
          <Image {...props} width={76} height={76} alt={props.alt ?? "category"} />
          {/* <div className="h-[80px] w-[80px] bg-gray-30" /> */}
          <p className="whitespace-nowrap text-label-medium">{label}</p>
        </article>
      </section>
    </Link>
  )
}
