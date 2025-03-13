interface Params {
  title?: string
  description?: string
}

export default function TitleSection({ title, description }: Params) {
  return (
    <article className="flex flex-col gap-[12px]">
      {/* Todo 폰트, 디자인시스템 적용 후 고정 px값 수정 */}
      <p className="line-clamp-2 h-[48px]">{title ?? "-"}</p>
      <p className="line-clamp-2 h-[48px]">{description ?? "-"}</p>
    </article>
  )
}
