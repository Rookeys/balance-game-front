import { EllipsisVertical } from "lucide-react"

interface Params {
  id?: number
  category?: string
}

export default function SocialActionSection({ category }: Params) {
  return (
    <article className="flex items-center justify-between">
      {category ? <p className="rounded-[4px] bg-gray-30 px-[8px] py-[4px]">{category}</p> : <p></p>}
      <EllipsisVertical size={24} />
    </article>
  )
}
