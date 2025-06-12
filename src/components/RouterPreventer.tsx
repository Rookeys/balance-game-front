"use client"
import { useNavigationStore } from "@/store/isGuardEnabled"
import { useNavigationGuard } from "next-navigation-guard"
import ConfirmModal from "./modal/ConfirmModal"
import { usePathname } from "next/navigation"
export default function RouterPreventer() {
  const isGuard = useNavigationStore((state) => state.isGuard)
  const pathname = usePathname()
  const isGuardEnabled = /\/game-create\/new|\/game-create\/edit/.test(pathname)
  const navGuard = useNavigationGuard({ enabled: isGuard && isGuardEnabled })
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
