"use client"

import { Button } from "@/components/Button"
import ProgressBar from "@/components/ProgressBar"
import SideBarWrapper from "@/components/SideBarWrapper"
import { cn } from "@/utils/cn"
import { Circle, CircleCheck } from "lucide-react"
import { usePathname } from "next/navigation"
import { Dispatch, SetStateAction } from "react"
import { toast } from "sonner"

interface Params {
  step: 1 | 2
  setStep: Dispatch<SetStateAction<1 | 2>>
}

export default function GameFormSideBar({ step, setStep }: Params) {
  const pathname = usePathname()
  const isNewPage = pathname.includes("new")
  const percent = !isNewPage ? 100 : step === 1 ? 0 : 33

  // const {
  //   formState: { isSubmitting }
  // } = useFormContext()

  return (
    <SideBarWrapper
    // containerClassName="min-h-screen"
    >
      <section className="flex flex-col gap-[20px] rounded-[40px] border px-[16px] py-[40px]">
        <article className="flex items-center justify-between">
          <p>월드컵 완성까지</p>
          <p className="rounded-[100px] bg-gray-10 px-[12px] py-[4px]">{percent}%</p>
        </article>
        <ProgressBar percent={percent} />
        <hr />
        <button type="button" className="flex items-center justify-between" onClick={() => setStep(1)}>
          <p>월드컵 정보</p>
          {step === 1 ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
        </button>
        <button type="button" className="flex items-center justify-between" onClick={() => setStep(2)}>
          <p>공개 설정</p>
          {step === 2 ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
        </button>
        <button
          type="button"
          className={cn("flex items-center justify-between rounded-[40px]", isNewPage && "bg-gray-10")}
          onClick={() => {
            if (isNewPage) {
              toast.warning("먼저 게임방을 생성 해주세요")
            } else {
              toast.success("페이지 이동 구현필요")
            }
          }}
        >
          <p>콘텐츠</p>
          <Circle stroke="#DDDDDD" />
        </button>
      </section>

      <Button
        key={`${step}-button`}
        className="bg-black text-white"
        type={step === 1 ? "button" : "submit"}
        // disabled={isSubmitting}
        onClick={() => {
          if (step === 1) {
            setStep(2)
          }
        }}
      >
        다음
      </Button>
    </SideBarWrapper>
  )
}

// "use client"
// import { Button } from "@/components/Button"
// import ProgressBar from "@/components/ProgressBar"
// import { cn } from "@/utils/cn"
// import { Circle, CircleCheck } from "lucide-react"
// import { usePathname } from "next/navigation"
// import { Dispatch, SetStateAction } from "react"
// import { toast } from "sonner"

// interface Params {
//   step: 1 | 2
//   setStep: Dispatch<SetStateAction<1 | 2>>
// }

// export default function GameFromSideBar({ step, setStep }: Params) {
//   const pathname = usePathname()
//   const isNewPage = pathname.includes("new")
//   const percent = !pathname.includes("new") ? 100 : step === 1 ? 0 : 33

//   // const { watch } = useFormContext<GameRequest>()

//   return (
//     <section className="hidden h-fit flex-shrink-0 flex-col gap-[24px] md:flex md:w-[224px] lg:w-[282px]">
//       <section className="flex flex-col gap-[20px] rounded-[40px] border px-[16px] py-[40px]">
//         <article className="flex items-center justify-between">
//           <p>월드컵 완성까지</p>
//           <p className="rounded-[100px] bg-gray-10 px-[12px] py-[4px]">{percent}%</p>
//         </article>
//         <ProgressBar percent={percent} />
//         <hr />
//         <button type="button" className="flex items-center justify-between" onClick={() => setStep(1)}>
//           <p>월드컵 정보</p>
//           {step === 1 ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
//           {/* <Circle stroke="#DDDDDD" /> */}
//           {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
//         </button>
//         <button type="button" className="flex items-center justify-between" onClick={() => setStep(2)}>
//           <p>공개 설정</p>
//           {step === 2 ? <CircleCheck fill="#000000" stroke="#DDDDDD" /> : <Circle stroke="#DDDDDD" />}
//           {/* <Circle stroke="#DDDDDD" /> */}
//           {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
//         </button>
//         <button
//           type="button"
//           className={cn("flex items-center justify-between rounded-[40px]", isNewPage && "bg-gray-10")}
//           onClick={() => {
//             if (isNewPage) {
//               toast.warning("먼저 게임방을 생성 해주세요")
//             } else {
//               toast.success("페이지 이동 구현필요")
//             }
//           }}
//         >
//           <p>콘텐츠</p>
//           <Circle stroke="#DDDDDD" />
//           {/* <CircleCheck fill="#000000" stroke="#DDDDDD" /> */}
//         </button>
//       </section>
//       <Button
//         key={`${step}-button`}
//         className="bg-black text-white"
//         type={step === 1 ? "button" : "submit"}
//         onClick={() => {
//           console.log("step", step)
//           if (step === 1) {
//             // if (!watch("title") || !watch("description") || watch("categories").length < 1) {
//             //   toast.warning("월드컵 정보를 확인 해주세요")
//             // } else {
//             setStep(2)
//             // }
//           }
//         }}
//       >
//         다음
//       </Button>
//     </section>
//   )
// }
