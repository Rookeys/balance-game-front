import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function MyPageLayout({
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
