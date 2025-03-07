import { ChevronLeft, ChevronRight } from "lucide-react"

interface Params {
  title: string
  titleIcon?: string
  prevElId: string
  nextElId: string
}

export default function SliderTitle({ title, titleIcon, prevElId, nextElId }: Params) {
  return (
    <section className="flex items-center justify-between">
      <article className="flex items-center gap-[8px]">
        <p>{title}</p>
        {titleIcon && <p>{titleIcon}</p>}
      </article>
      <article className="hidden items-center md:flex">
        <ChevronLeft id={prevElId} className="cursor-pointer" size={40} />
        <ChevronRight id={nextElId} className="cursor-pointer" size={40} />
      </article>
    </section>
  )
}
