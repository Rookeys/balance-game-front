import { cn } from "@/utils/cn"
import Link from "next/link"

interface Params {
  className?: string
}

export default function Footer({ className }: Params) {
  return (
    <section
      className={cn(
        "mt-[60px] flex flex-col justify-between border-t px-[16px] py-[48px] md:mt-[80px] md:px-[24px] lg:px-[120px]",
        className
      )}
    >
      <section className="flex flex-col justify-between gap-[40px] md:flex-row-reverse md:gap-0">
        <div className="flex flex-col gap-[8px] text-label-regular">
          <Link
            className="md:hidden"
            href="https://kojaem.notion.site/1ebeadad956780d38264d49909eb9abf"
            aria-label="짱픽 서비스 소개 페이지로 이동"
            title="짱픽 서비스 소개"
          >
            서비스 소개
          </Link>
          <Link
            className="md:hidden"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdx46EPWF42ElyDv9rMmgfIz5lOJfNmpP3OjcTgK6hCSfmqyQ/viewform"
            aria-label="짱픽 문의하기 폼으로 이동"
            title="문의하기"
          >
            문의하기
          </Link>
          <Link
            href="https://kojaem.notion.site/1eaeadad956780b8a29fe441d4fc3d16"
            aria-label="짱픽을 만든 사람들 소개 페이지로 이동"
            title="만든 사람들"
          >
            만든 사람들
          </Link>
          <Link
            href="https://kojaem-app-policies.github.io/Zznpk-Privacy-Policy"
            aria-label="짱픽 개인정보 처리 방침 페이지로 이동"
            title="개인정보 처리 방침"
          >
            개인정보 처리 방침
          </Link>
          <Link
            href="https://www.instagram.com/zzn_pk"
            aria-label="짱픽 인스타그램 페이지로 이동"
            title="짱픽 인스타그램"
          >
            인스타그램
          </Link>
        </div>
        <p className="inline-block w-fit text-caption1-regular text-label-alternative">
          © {new Date().getFullYear()}. zznpk. All Rights Reserved
        </p>
      </section>
    </section>
  )
}
