"use client"
import { GamePlayResourceResponse } from "@/api/orval/model/gamePlayResourceResponse"
import { GamePlayResourceResponseType } from "@/api/orval/model/gamePlayResourceResponseType"
import ResourceItem from "@/components/ResourceItem"
import { cn } from "@/utils/cn"
import { motion } from "motion/react"
import dynamic from "next/dynamic"
import "@/styles/border.css"
import SelectResourceButton from "@/app/(routes)/(ssr)/game/[id]/play/_components/SelectResourceButton"

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
        className={cn("relative w-full")}
        animate={{
          // scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.8) : 1,
          scale: !!selectedId ? (selected ? 1 : 0.8) : 1,
          transition: {
            duration: 0.4
          }
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <div className="relative flex cursor-pointer flex-col gap-[12px] rounded-[16px]">
          <figure className={cn(selected && "border-animation relative p-[2px]")}>
            <ImageRatio
              src={props.content ?? "/"}
              alt={`${props.title}-thumbnail`}
              ratio={5 / 4}
              fill
              wrapperClassName={cn("rounded-[16px]")}
              // className="border-animation p-[2px]"
              onClick={() => handleSelectItem(props.resourceId)}
            />
          </figure>
          <SelectResourceButton
            selected={selected}
            title={props.title}
            onClick={() => handleSelectItem(props.resourceId)}
          />
        </div>
        {/* <Button className="w-full cursor-default bg-primary-10 text-md opacity-0">선택하는 버튼</Button> */}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn("relative w-full")}
      animate={{
        // scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.8) : 1,
        scale: !!selectedId ? (selected ? 1 : 0.8) : 1,
        transition: {
          duration: 0.4
        }
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <div className="relative flex flex-col gap-[12px] rounded-[16px]">
        <figure className={cn(selected && "border-animation relative p-[2px]")}>
          <ResourceItem
            {...props}
            ratio={5 / 4}
            start={props.startSec}
            end={props.endSec}
            // wrapperClassName={cn("p-[2px]", selected && "border-animation")}
            noDelay
          />
        </figure>
        <SelectResourceButton
          selected={selected}
          title={props.title}
          onClick={() => handleSelectItem(props.resourceId)}
        />
      </div>
    </motion.div>
  )
}
