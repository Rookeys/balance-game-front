"use client"
import { Button } from "@/components/Button"
import useResizeHandler from "@/hooks/useResizeHandler"
import { SCREEN_SIZE } from "@/styles/theme/screenSize"
import { cn } from "@/utils/cn"
import { motion } from "motion/react"
import dynamic from "next/dynamic"

const ImageRatio = dynamic(() => import("@/components/ImageRatio"))
const YoutubeRatio = dynamic(() => import("@/components/YoutubeRatio"))

interface Params {
  id: string
  url: string
  type: "image" | "youtube"
  title: string
  selectedId: string | undefined
  handleSelectItem: (id: string) => void
}
export default function SelectItemBox({ id, url, type, title, selectedId, handleSelectItem }: Params) {
  const windowWidth = useResizeHandler()

  const selected = !!selectedId && selectedId === id

  const handleAnimationComplete = () => {
    if (selectedId === id) {
      console.log("animation complete!", id)
    }
  }

  if (type === "image") {
    return (
      <motion.div
        className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
        animate={{
          scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0) : 1,
          transition: {
            duration: 0.5
          }
        }}
        onAnimationComplete={handleAnimationComplete}
      >
        <ImageRatio
          src={url}
          alt={`${title}-thumbnail`}
          ratio={windowWidth > parseInt(SCREEN_SIZE.sm) ? 4 / 3 : 1 / 2}
          fill
          className="cursor-pointer"
          onClick={() => handleSelectItem(id)}
        />
        <article className="absolute top-[30%] sm:top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-2 rounded-xsm pointer-events-none bg-dark/30 max-w-full">
          <p className="text-white break-words">{title}</p>
        </article>
        <Button className="bg-primary-10 w-full text-md opacity-0 cursor-default">선택하는 버튼</Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      className={cn("relative w-[50vw]", selected ? "z-[2]" : "z-[1]")}
      animate={{
        scale: !!selectedId ? (selected ? [1, 1.25, 1, 1.25, 1] : 0) : 1,
        transition: {
          duration: 0.5
        }
      }}
      onAnimationComplete={handleAnimationComplete}
    >
      <YoutubeRatio
        url="https://www.youtube.com/watch?v=W3qIzaNndH4"
        ratio={windowWidth > parseInt(SCREEN_SIZE.sm) ? 4 / 3 : 1 / 2}
      />
      <article className="absolute top-[30%] sm:top-[50%] start-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-2 rounded-xsm pointer-events-none bg-dark/30 max-w-full">
        <p className="text-white break-words">{title}</p>
      </article>
      <Button className="bg-primary-10 w-full text-md" onClick={() => handleSelectItem(id)}>
        선택하는 버튼
      </Button>
    </motion.div>
  )
}
