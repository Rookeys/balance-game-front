"use client"
import { useNavigationGuard } from "next-navigation-guard"
import ConfirmModal from "./modal/ConfirmModal"
import { usePathname } from "next/navigation"

export default function RouterPreventer() {
  const pathname = usePathname()
  const isGuardEnabled = /\/game-create\/new|\/game-create\/edit/.test(pathname)
  const navGuard = useNavigationGuard({ enabled: isGuardEnabled })
  return (
    <>
      {navGuard.active && (
        <ConfirmModal
          title="페이지를 나가시겠습니까?"
          description="저장하지 않은 내용은 사라집니다."
          onClick={navGuard.accept}
          onClose={navGuard.reject}
        />
      )}
    </>
  )
}
