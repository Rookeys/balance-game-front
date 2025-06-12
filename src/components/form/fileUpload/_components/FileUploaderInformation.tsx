import Image from "next/image"

interface Params {
  disabled?: boolean
}

export function FileUploaderInformation({ disabled }: Params) {
  return (
    <section className="flex flex-col items-center gap-[12px] px-[16px] py-[48px]">
      {/* <Upload color={COLORS.BLUE} /> */}
      <p className="text-body2-bold md:text-body1-bold">이미지를 추가해 주세요</p>
      <p className="text-label-medium text-label-neutral md:text-body2-medium">
        이미지를 끌어다 놓거나 이미지 선택 버튼을 직접 선택해 주세요.
      </p>
      <div className="relative h-[40px] w-[40px] md:h-[56px] md:w-[56px]">
        <Image
          src={
            disabled ? "/images/icons/system/add_btn_disabled_lg.webp" : "/images/icons/system/add_btn_default_lg.webp"
          }
          alt="plus-icon"
          fill
        />
      </div>
      {/* <p className="text-sm text-blue">JPG / JPEG / PNG</p> */}
    </section>
  )
}
