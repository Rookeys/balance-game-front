"use client"
import { GamePlayResourceResponse } from "@/api/orval/model/gamePlayResourceResponse"
import { GamePlayResourceResponseType } from "@/api/orval/model/gamePlayResourceResponseType"
import ResourceItem from "@/components/ResourceItem"
import { cn } from "@/utils/cn"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"))

interface Params extends GamePlayResourceResponse {
  selectedId?: number
  handleSelectItem: (id?: number) => void
}
export default function SelectItemBox({ selectedId, handleSelectItem, ...props }: Params) {
  const selected = !!selectedId && selectedId === props.resourceId

  const handleAnimationComplete = () => {
    if (selectedId === props.resourceId) {
      console.log("animation complete!", props.resourceId)
    }
  }

  if (props.type === GamePlayResourceResponseType.IMAGE) {
    return (
      <motion.div
        className={cn("relative w-full", selected ? "z-[2]" : "z-[1]")}
        animate={{
          scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
          transition: {
            duration: 0.4
          }
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div
          className="relative cursor-pointer rounded-[12px] bg-gray-10 px-[6px] pt-[6px]"
          onClick={() => handleSelectItem(props.resourceId)}
        >
          <ImageRatio src={props.content ?? "/"} alt={`${props.title}-thumbnail`} ratio={5 / 4} fill />
          {/* {props.title && (
            <article className="pointer-events-none absolute start-[50%] top-[50%] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-xsm bg-dark/50 px-4 py-2">
              <p className="break-words text-white">{props.title}</p>
            </article>
          )} */}
          <article className="px-[16px] py-[12px]">
            <p className="line-clamp-2 break-all text-center">{props.title || "\u00A0"}</p>
          </article>
        </div>
        {/* <Button className="w-full cursor-default bg-primary-10 text-md opacity-0">선택하는 버튼</Button> */}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn("relative w-full", selected ? "z-[2]" : "z-[1]")}
      animate={{
        scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
        transition: {
          duration: 0.4
        }
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <div className="relative rounded-[12px] bg-gray-10 px-[6px] pt-[6px]">
        <ResourceItem {...props} ratio={5 / 4} start={props.startSec} end={props.endSec} noDelay />
        {/* {props.title && (
          <article className="pointer-events-none absolute start-[50%] top-[50%] z-10 max-w-full translate-x-[-50%] translate-y-[-50%] rounded-[8px] bg-dark/50 px-4 py-2">
            <p className="break-words text-white">{props.title}</p>
          </article>
        )} */}
        <article className="cursor-pointer px-[16px] py-[12px]" onClick={() => handleSelectItem(props.resourceId)}>
          <p className="line-clamp-2 break-all text-center">{props.title || "\u00A0"}</p>
        </article>
      </div>
      {/* <Button className="w-full bg-primary-10 text-md" onClick={() => handleSelectItem(props.resourceId)}>
        선택하는 버튼
      </Button> */}
    </motion.div>
  )
}

// "use client"
// import { GamePlayResourceResponse } from "@/api/orval/model/gamePlayResourceResponse"
// import { GamePlayResourceResponseType } from "@/api/orval/model/gamePlayResourceResponseType"
// import { Button } from "@/components/Button"
// import { cn } from "@/utils/cn"
// import { motion } from "motion/react"
// import dynamic from "next/dynamic"

// const ImageRatio = dynamic(() => import("@/components/ImageRatio"))
// const YoutubeRatio = dynamic(() => import("@/components/YoutubeRatio"))

// interface Params extends GamePlayResourceResponse {
//   selectedId?: number
//   handleSelectItem: (id?: number) => void
// }
// export default function SelectItemBox({ selectedId, handleSelectItem, ...props }: Params) {
//   const selected = !!selectedId && selectedId === props.resourceId

//   const handleAnimationComplete = () => {
//     if (selectedId === props.resourceId) {
//       console.log("animation complete!", props.resourceId)
//     }
//   }

//   if (props.type === GamePlayResourceResponseType.IMAGE) {
//     return (
//       <motion.div
//         className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
//         animate={{
//           scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
//           transition: {
//             duration: 0.4
//           }
//         }}
//         onAnimationComplete={handleAnimationComplete}
//       >
//         <figure className="relative">
//           <ImageRatio
//             src={props.content ?? "/"}
//             alt={`${props.title}-thumbnail`}
//             ratio={4 / 3}
//             fill
//             className="cursor-pointer"
//             onClick={() => handleSelectItem(props.resourceId)}
//           />
//           {props.title && (
//             <article className="pointer-events-none absolute start-[50%] top-[50%] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-xsm bg-dark/50 px-4 py-2">
//               <p className="break-words text-white">{props.title}</p>
//             </article>
//           )}
//         </figure>
//         {/* <Button className="w-full cursor-default bg-primary-10 text-md opacity-0">선택하는 버튼</Button> */}
//       </motion.div>
//     )
//   }

//   return (
//     <motion.div
//       className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
//       animate={{
//         scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
//         transition: {
//           duration: 0.4
//         }
//       }}
//       onAnimationComplete={handleAnimationComplete}
//     >
//       <div className="relative">
//         <YoutubeRatio url={props.content} ratio={4 / 3} start={props.startSec} end={props.endSec} />
//         {props.title && (
//           <article className="pointer-events-none absolute start-[50%] top-[50%] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-xsm bg-dark/50 px-4 py-2">
//             <p className="break-words text-white">{props.title}</p>
//           </article>
//         )}
//       </div>
//       <Button className="w-full bg-primary-10 text-md" onClick={() => handleSelectItem(props.resourceId)}>
//         선택하는 버튼
//       </Button>
//     </motion.div>
//   )
// }
