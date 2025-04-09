"use client"

import { XIcon } from "lucide-react"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "./Button"
import ModalWrapper from "./modal/ModalWrapper"

interface Params {
  id?: string
  onClose?: () => void
  overlayClose?: boolean
  // onClick?: () => void
}

const reportItems = [
  { id: "obscenity", label: "음란성 콘텐츠" },
  { id: "disgust", label: "혐오감 유발 컨텐츠" },
  { id: "copyright", label: "개인정보 또는 저작권 침해" },
  { id: "etc", label: "기타" }
]

interface ReportFormData {
  obscenity?: boolean
  disgust?: boolean
  copyright?: boolean
  etc?: boolean
}

export default function GameReportModal({ id, onClose, overlayClose }: Params) {
  const { handleSubmit, register } = useForm<ReportFormData>({
    defaultValues: {
      obscenity: false,
      disgust: false,
      copyright: false,
      etc: false
    }
  })

  const onSubmit = async (data: FieldValues) => {
    alert(`${id}신고 ${JSON.stringify(data)}`)
  }

  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className="z-[999] mx-[16px] w-full max-w-[500px] rounded-[16px] bg-[#FFFFFF] px-[16px] pt-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex items-center justify-end">
            <XIcon size={24} className="cursor-pointer" onClick={onClose} />
          </section>
          <section className="flex flex-col gap-[24px] py-[20px]">
            <article className="flex flex-col gap-[4px]">
              <p>어떤 사유로 신고하시나요?</p>
              <p>중복 선택 가능</p>
            </article>
            <article>
              {reportItems.map((data) => (
                <div className="flex items-center gap-[12px] py-[16px]" key={data.id}>
                  <input id={data.id} type="checkbox" {...register(data.id as keyof ReportFormData)} />
                  <label htmlFor={data.id}>{data.label}</label>
                </div>
              ))}
            </article>
            <p>운영 방침에 따라 신고 사유에 해당하는지 검토 후 처리 예정입니다.</p>
            <Button className="mt-[16px] bg-black text-white" type="submit" onClick={(e) => e.stopPropagation()}>
              신고하기
            </Button>
          </section>
        </form>
      </section>
    </ModalWrapper>
  )
}
