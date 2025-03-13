"use client"
import { Button } from "@/components/Button"
import ModalWrapper from "./ModalWrapper"

interface Params {
  title?: string
  description?: string
  onClose?: () => void
  onClick?: () => void
  overlayClose?: boolean
}

export default function ConfirmModal({ title, description, onClick, onClose, overlayClose = false }: Params) {
  return (
    <ModalWrapper onClose={onClose} overlayClose={overlayClose}>
      <section className="z-[999] mx-[16px] w-full max-w-[400px] rounded-sm bg-light p-6 dark:border dark:border-gray-70 dark:bg-night">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="mt-[12px]">{description}</p>
        <article className="mt-[16px] flex justify-end gap-2">
          <Button
            className="rounded rounded-xsm bg-dark-20 px-4 py-2 text-sm text-white hover:bg-dark-30"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            className="rounded rounded-xsm bg-blue-40 px-4 py-2 text-sm text-white hover:bg-blue-50"
            onClick={onClick}
          >
            확인
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
