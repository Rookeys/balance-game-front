export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/my-page/:path*", "/game-create/:path*"]
}
