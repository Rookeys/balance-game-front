import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
  children: React.ReactNode
}

export default function ModalWrapper({ onClose, overlayClose, children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 flex items-center justify-center z-[50]">
        {children}
        <div
          className="bg-dark/50 w-full h-full fixed"
          onClick={() => {
            if (overlayClose && !!onClose) onClose()
          }}
        />
      </div>
    </ModalPortal>
  )
}
