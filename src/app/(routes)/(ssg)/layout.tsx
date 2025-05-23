import AuthProvider from "@/lib/providers/AuthProvider"
import CookieProvider from "@/lib/providers/CookieProvider"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { parseBoolean } from "@/utils/parseBoolean"
import { cookies } from "next/headers"

export default async function SSGLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const noBlind = parseBoolean(cookieStore.get("noBlind")?.value)

  return (
    <AuthProvider>
      <ReactQueryProvider>
        <CookieProvider noBlind={noBlind}>
          {/* <NavigationGuardProvider> */}
          {/* <Header /> */}
          {/* <HeaderSSG /> */}
          {children}
          {/* <Footer /> */}
          {/* <RouterPreventer /> */}
          {/* </NavigationGuardProvider> */}
        </CookieProvider>
      </ReactQueryProvider>
    </AuthProvider>
  )
}
