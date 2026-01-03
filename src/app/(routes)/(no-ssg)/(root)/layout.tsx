import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default async function RootPageLayout({
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
