interface Params {
  title?: string
  description?: string
}

export default function TitleSection({ title, description }: Params) {
  return (
    <article className="flex flex-col gap-[8px]">
      {/* Todo 폰트, 디자인시스템 적용 후 고정 px값 수정 */}
      <p className="line-clamp-2 text-label-bold md:text-body1-bold">{title ?? "-"}</p>
      <p className="line-clamp-2 text-caption1-regular text-label-neutral md:text-body2-regular">
        {description ?? "-"}
      </p>
    </article>
  )
}
