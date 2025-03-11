import { EllipsisVertical } from "lucide-react"

export default function SocialActionSection() {
  return (
    <article className="flex items-center justify-between">
      <p className="rounded-[4px] bg-gray-30 px-[8px] py-[4px]">카테고리</p>
      <EllipsisVertical size={24} />
    </article>
  )
}
