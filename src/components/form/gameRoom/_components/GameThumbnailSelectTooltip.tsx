"use client"

import { offset } from "@floating-ui/dom"
import { Tooltip } from "react-tooltip"

interface Params {
  id: string
}

export default function GameThumbnailSelectTooltip({ id }: Params) {
  return (
    <Tooltip
      id={id}
      className="!pointer-events-auto z-10 !rounded-[8px] !bg-label-strong !px-[12px] !py-[8px]"
      place="right"
      middlewares={[offset(10)]}
    >
      <section className="flex max-w-[232px] flex-col gap-[4px] text-background md:max-w-[522px]">
        <p className="text-label-bold">부적절한 콘텐츠를 포함하고 있나요?</p>
        <p className="text-label-regular">
          다른 사람들을 위해, 아래와 같은 부적절한 콘텐츠가 포함된 경우 필터를 추가해 주세요.
          <br />
          • 선정적인 요소 포함 여부 (과도한 노출, 성적인 암시 등)
          <br />
          • 공포 또는 혐오감을 유발하는 콘텐츠 (귀신 이미지, 고어, 잔인한 장면 등)
          <br />• 기타 유해한 콘텐츠 (폭력, 혐오스러운 이미지 등)
        </p>
      </section>
    </Tooltip>
  )
}
