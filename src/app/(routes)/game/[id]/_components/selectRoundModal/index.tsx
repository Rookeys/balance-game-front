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
      <section className="bg-light dark:bg-night rounded-sm w-full max-w-[400px] p-6 mx-[16px] z-[999] dark:border dark:border-gray-70">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-[8px] mb-[12px]">{description}</p>
        <RoundForm totalItem={totalItem} setIsOpen={setIsOpen} />
      </section>
    </ModalWrapper>
  )
}
