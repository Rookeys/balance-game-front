"use client"
import ModalWrapper from "@/components/modal/ModalWrapper"
import { Dispatch, SetStateAction } from "react"
import RoundForm from "./RoundForm"

interface Params {
  title?: string
  description?: string
  totalItem: number
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function SelectRoundModal({ title, description, totalItem, setIsOpen }: Params) {
  return (
    <ModalWrapper>
      <section className="z-[999] mx-[16px] w-full max-w-[400px] rounded-sm bg-light p-6 dark:border dark:border-gray-70 dark:bg-night">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mb-[12px] mt-[8px]">{description}</p>
        <RoundForm totalItem={totalItem} setIsOpen={setIsOpen} />
      </section>
    </ModalWrapper>
  )
}
