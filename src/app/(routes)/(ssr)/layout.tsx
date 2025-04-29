import { authOptions } from "@/auth"
import RouterPreventer from "@/components/RouterPreventer"
import AuthProvider from "@/lib/providers/AuthProvider"
import CookieProvider from "@/lib/providers/CookieProvider"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { parseBoolean } from "@/utils/parseBoolean"
import { getServerSession } from "next-auth"
import { NavigationGuardProvider } from "next-navigation-guard"
import { cookies } from "next/headers"

export default async function SSRLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  const cookieStore = await cookies()
  const noBlind = parseBoolean(cookieStore.get("noBlind")?.value)

  return (
    <AuthProvider session={session}>
      <ReactQueryProvider>
        <CookieProvider noBlind={noBlind}>
          <NavigationGuardProvider>
            {/* <Header /> */}
            {/* <HeaderSSG /> */}
            {children}
            {/* <Footer /> */}
            <RouterPreventer />
          </NavigationGuardProvider>
        </CookieProvider>
      </ReactQueryProvider>
    </AuthProvider>
  )
}
