interface Params {
  title?: string
  description?: string
}

export default function TitleSection({ title, description }: Params) {
  return (
    <article className="flex flex-col gap-[8px]">
      {/* Todo 폰트, 디자인시스템 적용 후 고정 px값 수정 */}
      <p className="line-clamp-2 text-body-bold text-label-normal">{title ?? "-"}</p>
      <p className="line-clamp-2 text-label-regular text-label-neutral">{description ?? "-"}</p>
    </article>
  )
}
