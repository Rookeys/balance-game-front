import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
  children: React.ReactNode
}

/**
 *
 * @remarks
 * 이 컴포넌트를 사용할때는 children 에 z-index 값을 명시 해주세요
 *
 * @example
 * ```tsx
 * <section className="z-50 ..." />
 * ```
 */

export default function ModalWrapper({ onClose, overlayClose, children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        {children}
        <div
          className="fixed h-full w-full bg-black/50"
          onClick={() => {
            if (overlayClose && !!onClose) onClose()
          }}
        />
      </div>
    </ModalPortal>
  )
}
