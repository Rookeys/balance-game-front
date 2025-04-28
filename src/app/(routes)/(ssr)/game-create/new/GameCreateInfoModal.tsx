"use client"
import InfoModal from "@/components/modal/InfoModal"
import { useEffect, useState } from "react"

export default function GameCreateInfoModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <>
      {isOpen && (
        <InfoModal
          title="만들기 전 유의사항을 확인해 주세요!"
          DescriptionUI={
            <article className="flex flex-col text-body-regular text-label-normal">
              <p>
                다음 예시와 같이 운영정책을 위반하는 월드컵을 제작하는 경우 월드컵 삭제 및 제작 차단 조치될 수 있으니
                주의해 주세요.
              </p>
              <br />
              <p>• 과도하게 선정적(성인물 수준)이거나 과도하게 공격적, 편향적인 경우</p>
              <p>• 저작권, 초상권 등 타인 권리를 침해하는 경우</p>
              <br />
              <p>운영정책 위반이 반복되는 경우 차단 기간이 늘어나요.</p>
            </article>
          }
          okLabel="확인했어요"
          onClick={() => setIsOpen(false)}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
