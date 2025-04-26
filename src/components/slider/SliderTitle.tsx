import { ChevronLeft, ChevronRight } from "lucide-react"

interface Params {
  title: string
  titleIcon?: string
  prevElId?: string
  nextElId?: string
}

export default function SliderTitle({ title, titleIcon, prevElId, nextElId }: Params) {
  return (
    <section className="flex h-[40px] items-center justify-between">
      <article className="flex items-center gap-[8px]">
        <p className="font-sb-aggro-medium text-heading-3 text-label-normal">{title}</p>
        {titleIcon && <p>{titleIcon}</p>}
      </article>
      {prevElId && nextElId && (
        <article className="hidden items-center md:flex">
          <ChevronLeft id={prevElId} className="cursor-pointer" size={40} />
          <ChevronRight id={nextElId} className="cursor-pointer" size={40} />
        </article>
      )}
    </section>
  )
}
