import { cn } from "@/utils/cn"
import { ModalPortal } from "@/utils/modalPortal"

interface Params {
  onClose?: () => void
  overlayClose?: boolean
  className?: string
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

export default function ModalWrapper({ onClose, overlayClose, className, children }: Params) {
  return (
    <ModalPortal>
      <div className="fixed inset-0 z-[50] flex items-center justify-center">
        <div
          className="fixed inset-0 bg-black/50"
          onClick={() => {
            if (overlayClose && !!onClose) onClose()
          }}
        />
        <div
          className={cn(
            "z-[51] mx-[16px] flex max-h-[calc(100vh-32px)] w-full justify-center overflow-y-auto",
            className
          )}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  )
}
