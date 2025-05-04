"use client"
import { useSaveGame, useUpdateGameStatus } from "@/api/orval/client/game-room-controller/game-room-controller"
import {
  getGetMyGameStatusQueryKey,
  useGetMyGameStatus
} from "@/api/orval/client/user-profile-controller/user-profile-controller"
import { GameRequest } from "@/api/orval/model/gameRequest"
import { GameRequestAccessType } from "@/api/orval/model/gameRequestAccessType"
import StepTab, { StepTabItem } from "@/components/StepTab"
import TabBar, { TabBarItem } from "@/components/TabBar"
import { useAsyncRoutePush } from "@/hooks/useAsyncRoutePush"
import { useNavigationStore } from "@/store/isGuardEnabled"
import { postGameSchema, PostGameType } from "@/validations/gameSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQueryClient } from "@tanstack/react-query"
import dynamic from "next/dynamic"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { FieldErrors, FormProvider, useForm } from "react-hook-form"
import { toast } from "sonner"
import GameFormBottomBar from "./_components/GameFormBottomBar"
import GameFormSideBar from "./_components/GameFormSideBar"

const GameInformationForm = dynamic(() => import("./_components/GameInformationForm"))
const GameAccessForm = dynamic(() => import("./_components/GameAccessForm"))

export default function GameForm() {
  const { id } = useParams()
  const [step, setStep] = useState<1 | 2>(1)
  const setIsGuardEnabled = useNavigationStore((state) => state.setIsGuard)

  const router = useRouter()

  const queryClient = useQueryClient()

  const { data } = useGetMyGameStatus(Number(id), { query: { enabled: !!id } })

  const formMethods = useForm<PostGameType>({
    values: {
      title: data?.title ?? "",
      existsBlind: false,
      description: data?.description ?? "",
      categories: data?.categories ?? [],
      existsNamePrivate: false,
      accessType: data?.accessType ?? GameRequestAccessType.PUBLIC
      // inviteCode: data?.inviteCode ?? ""
    },
    resolver: zodResolver(postGameSchema)
  })

  const {
    handleSubmit,
    watch,
    formState: { isDirty, isSubmitting }
  } = formMethods

  useEffect(() => {
    if (isDirty) {
      setIsGuardEnabled(true)
    } else {
      setIsGuardEnabled(false)
    }
  }, [isDirty, setIsGuardEnabled])

  const asyncPush = useAsyncRoutePush()

  const { mutateAsync: CreateGame } = useSaveGame()
  const { mutateAsync: UpdateGame } = useUpdateGameStatus()

  const onSubmit = async (data: PostGameType) => {
    try {
      console.log("data", data)
      setIsGuardEnabled(false)
      if (id) {
        await UpdateGame({ gameId: Number(id), data })
        queryClient.invalidateQueries({ queryKey: getGetMyGameStatusQueryKey(Number(id)) })
        await asyncPush(`/game-create/${id}/medias`)
      } else {
        const res = await CreateGame({ data })
        await asyncPush(`/game-create/${res}/medias`)
      }
    } catch {
      toast.error("오류가 발생했습니다. 다시 시도해주세요")
    }
  }

  const errorHandle = (e: FieldErrors<GameRequest>) => {
    const firstError = Object.values(e)[0]?.message

    if (firstError) {
      toast.error(firstError)
    }
  }

  const tabItems: TabBarItem[] = [
    {
      label: "기본 설정",
      value: "기본 설정",
      onClick: () => {}
    },
    {
      label: "콘텐츠",
      value: "콘텐츠",
      // onClick: () => toast.warning("먼저 게임방을 생성 해주세요"),
      onClick: () => {
        if (!id) {
          toast.warning("게임을 먼저 생성해 주세요.")
        } else {
          router.push(`/game-create/${id}/medias`)
        }
      },
      disabled: true
    }
  ]

  const stepItems: StepTabItem[] = [
    {
      label: "월드컵 소개",
      value: 1,
      onClick: () => setStep(1)
    },
    {
      label: "공개 설정",
      value: 2,
      onClick: () => setStep(2)
    }
  ]

  const isStep1Complete = !!watch("title") && !!watch("description") && watch("categories")?.length > 0

  return (
    <FormProvider {...formMethods}>
      <TabBar items={tabItems} currentValue={"기본 설정"} className="md:hidden" />
      <form
        className="flex w-full max-w-[1200px] justify-center gap-[24px] px-[16px] lg:px-0"
        onSubmit={handleSubmit(onSubmit, errorHandle)}
      >
        <section className="flex w-full flex-col md:gap-[40px]">
          <StepTab items={stepItems} currentValue={step} />
          {step === 1 && <GameInformationForm />}
          {step === 2 && <GameAccessForm />}
        </section>
        <GameFormSideBar
          step={step}
          setStep={setStep}
          percent={isStep1Complete ? 33 : 0}
          isStep1Complete={isStep1Complete}
          disabled={isSubmitting}
        />
        <GameFormBottomBar step={step} setStep={setStep} percent={isStep1Complete ? 33 : 0} disabled={isSubmitting} />
      </form>
    </FormProvider>
  )
}
