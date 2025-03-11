import { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

export default function DashboardLayout({ children }: LayoutProps) {
  return <section className="px-[16px] md:px-[24px] lg:px-[120px]">{children}</section>
}
