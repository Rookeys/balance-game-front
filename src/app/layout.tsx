import { authOptions } from "@/auth"
import RouterPreventer from "@/components/RouterPreventer"
import ToasterWithTheme from "@/components/ToasterWithTheme"
import AuthProvider from "@/lib/providers/AuthProvider"
import CookieProvider from "@/lib/providers/CookieProvider"
import ReactQueryProvider from "@/lib/providers/ReactQueryProvider"
import "@/styles/globals.css"
import "@/styles/reset.css"
import { parseBoolean } from "@/utils/parseBoolean"
import type { Metadata } from "next"
import { getServerSession } from "next-auth"
import { NavigationGuardProvider } from "next-navigation-guard"
import { ThemeProvider } from "next-themes"
import { cookies } from "next/headers"
import { MoneygraphyRounded } from "./fonts"
import LoginConfirmModal from "@/components/modal/LoginConfirmModal"

export const metadata: Metadata = {
  title: {
    default: "짜릿한 선택! 짱픽!",
    template: "짱픽 | %s"
  },
  description: "당신의 이상형 월드컵을 만들고, 즐기세요! 짜릿한 선택 짱픽!",
  openGraph: {
    siteName: "짜릿한 선택! 짱픽!",
    title: "짜릿한 선택! 짱픽!",
    type: "website",
    description: "당신의 이상형 월드컵을 만들고, 즐기세요! 짜릿한 선택 짱픽!",
    images: [
      {
        url: "/images/zznpk_og_image.png",
        alt: "Zznpk OG IMAGE"
      }
    ],
    url: "https://zznpk.com"
  },
  metadataBase: new URL("https://zznpk.com")
}

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)
  const cookieStore = await cookies()
  const noBlind = parseBoolean(cookieStore.get("noBlind")?.value)

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${MoneygraphyRounded.className} text-dark antialiased dark:text-light`}>
        <AuthProvider session={session}>
          <ReactQueryProvider>
            <CookieProvider noBlind={noBlind}>
              <NavigationGuardProvider>
                <ThemeProvider>
                  <div id="portal" />
                  {/* <Header /> */}
                  {/* <HeaderSSG /> */}
                  {children}
                  {/* <Footer /> */}
                  <LoginConfirmModal />
                  <ToasterWithTheme />
                </ThemeProvider>
                <RouterPreventer />
              </NavigationGuardProvider>
            </CookieProvider>
          </ReactQueryProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
