import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
  children: React.ReactNode
}

export default function ModalWrapper({ onClose, overlayClose, children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        {children}
        <div
          className="fixed h-full w-full bg-dark/50"
          onClick={() => {
            if (overlayClose && !!onClose) onClose()
          }}
        />
      </div>
    </ModalPortal>
  )
}
