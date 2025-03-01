"use client"
import { GamePlayResourceResponseType } from "@/api/orval/model/gamePlayResourceResponseType"
import { Button } from "@/components/Button"
import { cn } from "@/utils/cn"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"))
const YoutubeRatio = dynamic(() => import("@/components/YoutubeRatio"))

interface Params {
  id?: string
  url?: string
  type?: GamePlayResourceResponseType
  title?: string
  selectedId: string | undefined
  handleSelectItem: (id: string) => void
}
export default function SelectItemBox({
  id = "",
  url = "",
  type = GamePlayResourceResponseType.IMAGE,
  title,
  selectedId,
  handleSelectItem
}: Params) {
  const selected = !!selectedId && selectedId === id

  const handleAnimationComplete = () => {
    if (selectedId === id) {
      console.log("animation complete!", id)
    }
  }

  if (type === GamePlayResourceResponseType.IMAGE) {
    return (
      <motion.div
        className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
        animate={{
          scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
          transition: {
            duration: 0.5
          }
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <ImageRatio
          src={url}
          alt={`${title}-thumbnail`}
          ratio={4 / 3}
          fill
          className="cursor-pointer"
          onClick={() => handleSelectItem(id)}
        />
        {title && (
          <article className="pointer-events-none absolute start-[50%] top-[30%] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-xsm bg-dark/30 px-4 py-2 sm:top-[50%]">
            <p className="break-words text-white">{title}</p>
          </article>
        )}
        <Button className="w-full cursor-default bg-primary-10 text-md opacity-0">선택하는 버튼</Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
      animate={{
        scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0.25) : 1,
        transition: {
          duration: 0.5
        }
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <YoutubeRatio url={url} ratio={4 / 3} />
      {title && (
        <article className="pointer-events-none absolute start-[50%] top-[30%] max-w-full translate-x-[-50%] translate-y-[-50%] rounded-xsm bg-dark/30 px-4 py-2 sm:top-[50%]">
          <p className="break-words text-white">{title}</p>
        </article>
      )}
      <Button className="w-full bg-primary-10 text-md" onClick={() => handleSelectItem(id)}>
        선택하는 버튼
      </Button>
    </motion.div>
  )
}
