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
      <section className="bg-light dark:bg-night rounded-sm w-full max-w-[400px] p-6 mx-[16px] z-[999] dark:border dark:border-gray-70">
        <h2 className="text-md font-semibold">{title}</h2>
        <p className="mt-[12px]">{description}</p>
        <article className="mt-[16px] flex justify-end gap-2">
          <Button
            className="px-4 py-2 text-sm text-white bg-dark-20 rounded hover:bg-dark-30 rounded-xsm"
            onClick={onClose}
          >
            취소
          </Button>
          <Button
            className="px-4 py-2 text-sm text-white bg-blue-40 rounded hover:bg-blue-50 rounded-xsm"
            onClick={onClick}
          >
            확인
          </Button>
        </article>
      </section>
    </ModalWrapper>
  )
}
