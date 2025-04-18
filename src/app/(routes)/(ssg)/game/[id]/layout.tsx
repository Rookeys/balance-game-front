import Footer from "@/components/Footer"
import HeaderSSG from "@/components/HeaderSSG"

export default async function RootLayout({
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
