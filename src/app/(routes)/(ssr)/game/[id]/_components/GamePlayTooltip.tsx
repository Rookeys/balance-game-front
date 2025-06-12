"use client"

import { useGetGameStatus } from "@/api/orval/client/main-page-controller/main-page-controller"
import { cn } from "@/utils/cn"
import { offset } from "@floating-ui/dom"
import { motion } from "motion/react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { ITooltip, Tooltip } from "react-tooltip"

export default function GamePlayTooltip(props: ITooltip) {
  const { id } = useParams()
  const { data: gameDetailData } = useGetGameStatus(Number(id))
  return (
    <motion.div
      animate={{ y: [0, 4, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut"
      }}
    >
      <Tooltip
        id={props.id}
        className={cn("!end-0 !rounded-[8px] !bg-label-strong !px-[12px] !py-[8px]", props.className)}
        isOpen={true}
        defaultIsOpen
        place="top-end"
        middlewares={[offset(10)]}
        classNameArrow={cn("absolute !start-auto end-[8px]", props.classNameArrow)}
      >
        <section className="flex items-center gap-[8px]">
          <Image src="/images/icons/system/user_group.webp" width={24} height={24} alt="user-group-image" />
          <p className="text-label-regular text-background">{gameDetailData?.totalPlayNums}명이 참여했어요!</p>
        </section>
      </Tooltip>
    </motion.div>
  )
}
