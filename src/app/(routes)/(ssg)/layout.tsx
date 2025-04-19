import RouterPreventer from "@/components/RouterPreventer"
import ToasterWithTheme from "@/components/ToasterWithTheme"
import AuthProvider from "@/lib/providers/AuthProvider"
import CookieProvider from "@/lib/providers/CookieProvider"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { parseBoolean } from "@/utils/parseBoolean"
import { NavigationGuardProvider } from "next-navigation-guard"
import { ThemeProvider } from "next-themes"
import { cookies } from "next/headers"

export default async function RootLayout({
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
          <NavigationGuardProvider>
            <ThemeProvider>
              <div id="portal" />
              {/* <Header /> */}
              {/* <HeaderSSG /> */}
              {children}
              {/* <Footer /> */}
              <ToasterWithTheme />
            </ThemeProvider>
            <RouterPreventer />
          </NavigationGuardProvider>
        </CookieProvider>
      </ReactQueryProvider>
    </AuthProvider>
  )
}
