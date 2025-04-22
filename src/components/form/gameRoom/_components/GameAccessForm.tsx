import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import { InputLabel } from "@/components/form/_components/InputLabel"
import InputText from "@/components/form/inputText/InputText"
import { CircleAlert } from "lucide-react"
import { Controller, useFormContext } from "react-hook-form"
import SelectButton from "./SelectButton"

export default function GameAccessForm() {
  const { watch, setValue, control } = useFormContext<GameRequest>()
  return (
    <section className="flex w-full flex-col gap-[40px]">
      <article className="flex flex-col gap-[4px]">
        <div className="flex gap-[4px]">
          <p>공개 여부를 설정해 주세요</p>
          <p>🔓</p>
        </div>
        <p>월드컵 설정은 만든후에도 변경할 수 있어요.</p>
      </article>
      <article className="flex flex-col gap-[12px]">
        <InputLabel label="제작자 공개" />
        <Controller
          name="existsNamePrivate"
          control={control}
          render={({ field }) => (
            <div className="flex gap-[12px]">
              <SelectButton
                title="공개"
                description="팔로워들이 확인할 수 있어요"
                onClick={() => {
                  field.onChange(false)
                }}
                selected={field.value === false}
              />
              <SelectButton
                title="비공개"
                description="팔로워들이 확인할 수 없어요"
                onClick={() => {
                  field.onChange(true)
                }}
                selected={field.value === true}
              />
            </div>
          )}
        />
      </article>
      <article className="flex flex-col gap-[12px]">
        <InputLabel label="썸네일 블라인드" />
        <Controller
          name="existsBlind"
          control={control}
          render={({ field }) => (
            <div className="flex gap-[12px]">
              <SelectButton
                title="사용"
                description="썸네일에 블라인드가 적용돼요"
                onClick={() => {
                  field.onChange(true)
                }}
                selected={field.value === true}
              />
              <SelectButton
                title="사용X"
                description="썸네일에 블라인드가 적용되지 않아요"
                onClick={() => {
                  field.onChange(false)
                }}
                selected={field.value === false}
              />
            </div>
          )}
        />
      </article>
      <article className="flex flex-col gap-[12px]">
        <InputLabel label="월드컵 공개" />
        <Controller
          name="accessType"
          control={control}
          render={({ field }) => (
            <div className="flex flex-col gap-[12px]">
              <SelectButton
                title="공개"
                description="팔로워들이 확인할 수 있어요"
                onClick={() => {
                  field.onChange(GameRequestAccessType.PUBLIC)
                }}
                selected={field.value === GameRequestAccessType.PUBLIC}
              />
              <SelectButton
                title="일부공개"
                description="팔로워들이 확인할 수 없어요"
                onClick={() => {
                  field.onChange(GameRequestAccessType.PROTECTED)
                }}
                selected={field.value === GameRequestAccessType.PROTECTED}
              />
              {watch("accessType") === GameRequestAccessType.PROTECTED && (
                <InputText
                  id="inviteCode"
                  value={watch("inviteCode")}
                  onChange={(e) => {
                    setValue("inviteCode", e.target.value, { shouldValidate: true, shouldDirty: true })
                  }}
                  placeholder="초대 코드를 생성해 주세요"
                  maxLength={10}
                  SubDescription={
                    <div className="flex items-center justify-between text-gray-50">
                      <div className="flex items-center gap-[4px]">
                        <CircleAlert className="fill-gray-30 text-white" />
                        <p>한글, 영문, 숫자, 특수문자 중 원하는 조합으로 최대 10자까지 만들 수 있어요.</p>
                      </div>
                      <p className="self-start">
                        {watch("inviteCode")?.toString().length ?? 0}/{10}
                      </p>
                    </div>
                  }
                />
              )}
              <SelectButton
                title="비공개"
                description="팔로워들이 확인할 수 없어요"
                onClick={() => {
                  field.onChange(GameRequestAccessType.PRIVATE)
                }}
                selected={field.value === GameRequestAccessType.PRIVATE}
              />
            </div>
          )}
        />
        <div className="flex items-center gap-[4px] text-gray-50">
          <CircleAlert className="fill-gray-30 text-white" />
          <p>일부 공개된 게임은 부적절한 콘텐츠 확인을 위해 개발자가 검토할 수 있어요.</p>
        </div>
      </article>
    </section>
  )
}
