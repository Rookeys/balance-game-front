import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function GamePlayPageLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
