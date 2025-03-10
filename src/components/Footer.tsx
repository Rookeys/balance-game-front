import Logo from "./Logo"

export default function Footer() {
  return (
    <section className="mt-[60px] flex flex-col justify-between gap-[48px] border-t border-t-red px-[16px] py-[48px] md:mt-[80px] md:gap-0 md:px-[24px] lg:px-[120px]">
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
      <p className="inline-block w-fit">© {new Date().getFullYear()}. Servicename. All Rights Reserved</p>
    </section>
  )
}
