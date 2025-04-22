import { COLORS } from "@/styles/theme/colors"
import { CirclePlus } from "lucide-react"

export function FileUploaderInformation() {
  return (
    <section className="flex flex-col items-center gap-[12px] p-[40px]">
      {/* <Upload color={COLORS.BLUE} /> */}
      <article className="flex flex-col items-center">
        <p className="text-base dark:text-gray-50">이미지를 추가해 주세요</p>
        <p className="text-sm text-gray-70">이미지를 끌어다 놓거나 이미지 선택 버튼을 직접 선택해 주세요.</p>
      </article>
      <CirclePlus fill={COLORS.BLACK} stroke={COLORS.WHITE} size={56} />
      {/* <p className="text-sm text-blue">JPG / JPEG / PNG</p> */}
    </section>
  )
}
