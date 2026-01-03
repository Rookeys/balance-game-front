import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function CategoryPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <section className="px-[16px] md:px-[24px]">{children}</section>
      <Footer />
    </>
  )
}
