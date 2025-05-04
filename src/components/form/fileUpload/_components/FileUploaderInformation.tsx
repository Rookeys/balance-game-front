import { COLORS } from "@/styles/theme/colors"
import { CirclePlus } from "lucide-react"

export function FileUploaderInformation() {
  return (
    <section className="flex flex-col items-center gap-[12px] px-[16px] py-[48px]">
      {/* <Upload color={COLORS.BLUE} /> */}
      <p className="text-body2-bold md:text-body1-bold">이미지를 추가해 주세요</p>
      <p className="text-label-medium text-label-neutral md:text-body2-medium">
        이미지를 끌어다 놓거나 이미지 선택 버튼을 직접 선택해 주세요.
      </p>
      <CirclePlus fill={COLORS.CYAN_500} stroke={COLORS.WHITE} size={56} />
      {/* <p className="text-sm text-blue">JPG / JPEG / PNG</p> */}
    </section>
  )
}
