interface Params {
  title?: string
}
export default function TitleSection({ title }: Params) {
  return (
    <article className="flex flex-col gap-[12px]">
      {/* Todo 폰트, 디자인시스템 적용 후 고정 px값 수정 */}
      <p className="line-clamp-2 h-[48px]">{title}</p>
    </article>
  )
}
