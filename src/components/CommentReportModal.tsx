"use client"

import { useSubmitGameCommentsReport } from "@/api/orval/client/game-report-controller/game-report-controller"
import { GameCommentReportRequestTargetType } from "@/api/orval/model/gameCommentReportRequestTargetType"
import { COLORS } from "@/styles/theme/colors"
import { log } from "@/utils/log"
import { reportCommentSchema, ReportCommentType } from "@/validations/reportSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, XIcon } from "lucide-react"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { FieldValues, useForm } from "react-hook-form"
import { Button } from "./Button"
import InputText from "./form/inputText/InputText"
import ModalWrapper from "./modal/ModalWrapper"

interface Params {
  id?: number
  onClose?: () => void
  overlayClose?: boolean
}

const reportItems: { id: keyof ReportCommentType; label: string; value: string }[] = [
  { id: "abuse", label: "욕설", value: "ABUSE" },
  { id: "sexual", label: "음란성 댓글", value: "SEXUAL" },
  { id: "ad", label: "광고", value: "AD" },
  { id: "papering", label: "도배", value: "PAPERING" },
  { id: "notRelated", label: "콘텐츠 성격과 맞지 않음", value: "NOT_RELATED" },
  { id: "etc", label: "기타", value: "ETC" }
]

export default function CommentReportModal({ id, onClose, overlayClose }: Params) {
  const { id: gameId } = useParams()
  const { mutateAsync: reportComment } = useSubmitGameCommentsReport()

  const pathname = usePathname()
  const searchParams = useSearchParams()

  const isDetailPage = /^\/game\/[^/]+\/comment$/.test(pathname)

  const tab = searchParams.get("tab")

  console.log("isDetailPage", isDetailPage)

  const isGameComment = isDetailPage || (pathname.includes("resources") && tab !== "resource")

  const {
    handleSubmit,
    register,
    watch,
    formState: { isSubmitting }
  } = useForm<ReportCommentType>({
    defaultValues: {
      abuse: false,
      sexual: false,
      ad: false,
      papering: false,
      notRelated: false,
      etc: false,
      etcReason: ""
    },
    resolver: zodResolver(reportCommentSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      const selectedValues = reportItems.filter((item) => data[item.id]).map((item) => item.value)

      await reportComment({
        gameId: Number(gameId),
        data: {
          targetId: Number(id),
          targetType: !isGameComment
            ? GameCommentReportRequestTargetType.RESOURCE_COMMENT
            : GameCommentReportRequestTargetType.RESULT_COMMENT,
          reasons: selectedValues,
          etcReason: data.etcReason
        }
      })
      if (onClose) {
        onClose()
      }
    } catch (error) {
      log(error)
    }
  }

  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section
        className="z-[999] w-full max-w-[500px] rounded-[16px] bg-[#FFFFFF] px-[16px] pt-[16px]"
        onClick={(e) => e.stopPropagation()}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <section className="flex items-center justify-end">
            <XIcon size={24} color={COLORS.NEUTRAL_700} className="cursor-pointer" onClick={onClose} />
          </section>
          <section className="flex flex-col gap-[24px] py-[20px]">
            <article className="flex flex-col gap-[4px]">
              <p className="font-sb-aggro-medium text-heading-4 text-label-normal md:text-heading-3">
                어떤 사유로 신고하시나요?
              </p>
              <p className="text-label-regular text-label-neutral">중복 선택 가능</p>
            </article>
            <article>
              {reportItems.map((data) => (
                <div className="flex items-center gap-[12px] py-[16px]" key={data.id}>
                  <div className="relative h-[20px] w-fit">
                    <input
                      id={data.id}
                      type="checkbox"
                      className="h-[20px] w-[20px] appearance-none rounded-[4px] border-[1px] border-line-normal checked:bg-primary-normal"
                      {...register(data.id as keyof ReportCommentType)}
                    />
                    {watch(data.id) && (
                      <div className="pointer-events-none absolute start-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                        <Check size={16} stroke={COLORS.WHITE} />
                      </div>
                    )}
                  </div>
                  <label className="text-body2-regular text-label-normal" htmlFor={data.id}>
                    {data.label}
                  </label>
                </div>
              ))}
              {watch("etc") && (
                <InputText
                  className="w-full"
                  id="etcReason"
                  placeholder="상세 내용을 작성해 주세요."
                  {...register("etcReason")}
                />
              )}
            </article>
            <p className="text-label-regular text-label-alternative">
              운영 방침에 따라 신고 사유에 해당하는지 검토 후 처리 예정입니다.
            </p>
            <Button className="mt-[16px]" type="submit" disabled={isSubmitting}>
              신고하기
            </Button>
          </section>
        </form>
      </section>
    </ModalWrapper>
  )
}
