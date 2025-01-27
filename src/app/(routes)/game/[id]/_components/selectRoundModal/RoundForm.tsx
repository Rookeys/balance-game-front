import { Button } from "@/components/Button"
import { InputErrorMessage } from "@/components/form/_components"
import Select from "@/components/form/select/Select"
import { generateRounds } from "@/utils/generateRounds"
import { sleep } from "@/utils/sleep"
import { PostRoundType, roundSchema } from "@/validations/roundSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dispatch, SetStateAction } from "react"
import { Controller, FieldValues, useForm } from "react-hook-form"

interface Params {
  totalItem: number
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function RoundForm({ totalItem, setIsOpen }: Params) {
  const {
    handleSubmit,
    control,
    formState: { isSubmitting, errors }
  } = useForm<PostRoundType>({
    resolver: zodResolver(roundSchema)
  })

  const onSubmit = async (data: FieldValues) => {
    try {
      await sleep(1000)
      console.log("data", data)
      setIsOpen(false)
    } catch {}
  }

  return (
    <section onSubmit={handleSubmit(onSubmit)}>
      <form className="flex flex-col gap-[12px]">
        <Controller
          name="round"
          control={control}
          render={({ field }) => <Select {...field} items={generateRounds(totalItem)} />}
        />
        {!!errors.round?.message && <InputErrorMessage id={"round"} errorMessage={errors.round?.message} />}
        <Button
          className="rounded self-end rounded-xsm bg-blue-40 px-4 py-2 text-sm text-white hover:bg-blue-50"
          disabled={isSubmitting}
          type="submit"
        >
          확인
        </Button>
      </form>
    </section>
  )
}
