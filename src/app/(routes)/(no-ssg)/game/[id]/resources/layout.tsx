import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function GameResultPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer className="mb-[80px] md:mb-0" />
    </>
  )
}
