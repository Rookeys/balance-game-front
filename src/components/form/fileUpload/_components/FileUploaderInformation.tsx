import { COLORS } from "@/styles/theme/colors"
import { Upload } from "lucide-react"

export function FileUploaderInformation() {
  return (
    <section className="flex flex-col items-center gap-[8px]">
      <Upload color={COLORS.BLUE} />
      <article className="flex flex-col items-center">
        <p className="text-base dark:text-gray-50">이미지 업로드</p>
        <p className="text-sm text-gray-70">클릭 또는 드래그</p>
      </article>
      <p className="text-sm text-blue">JPG / JPEG / PNG</p>
    </section>
  )
}
