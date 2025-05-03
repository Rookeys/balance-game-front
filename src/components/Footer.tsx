import { cn } from "@/utils/cn"
import Logo from "./Logo"

interface Params {
  bottomBarMargin?: boolean
}

export default function Footer({ bottomBarMargin }: Params) {
  return (
    <section
      className={cn(
        "mt-[60px] flex flex-col justify-between gap-[48px] border-t px-[16px] py-[48px] md:mt-[80px] md:gap-0 md:px-[24px] lg:px-[120px]",
        bottomBarMargin && "mb-[80px] md:mb-0"
      )}
    >
      <section className="flex flex-col justify-between gap-[48px] md:flex-row md:gap-0">
        <article className="relative">
          <Logo size={40} />
        </article>
        <article className="flex flex-col gap-[4px]">
          <p className="text-gray-70">TITLE</p>
          <div className="flex flex-col gap-[8px]">
            <p>만든 사람들</p>
            <p>개인정보 처리 방침</p>
            <p>인스타그램</p>
          </div>
        </article>
      </section>
      <p className="inline-block w-fit">© {new Date().getFullYear()}. zznpk. All Rights Reserved</p>
    </section>
  )
}
