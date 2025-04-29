import Footer from "@/components/Footer"
import HeaderSSG from "@/components/HeaderSSG"

export default async function GameDetailPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <HeaderSSG />
      {children}
      <Footer />
    </>
  )
}
