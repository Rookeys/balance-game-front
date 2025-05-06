import { ChevronLeft, ChevronRight } from "lucide-react"

interface Params {
  title: string
  updateTime?: string
  prevElId?: string
  nextElId?: string
}

export default function SliderTitle({ title, prevElId, nextElId, updateTime }: Params) {
  return (
    <section className="flex h-[62px] items-center justify-between">
      <article className="flex flex-col">
        <h2 className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">{title}</h2>
        {updateTime && <p className="text-label-regular text-label-alternative">{updateTime}전 업데이트</p>}
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
