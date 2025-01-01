import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  children: React.ReactNode
}

export default function ModalWrapper({ children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 flex items-center justify-center z-[50]">{children}</div>
    </ModalPortal>
  )
}
