export { auth as middleware } from "@/auth"

export const config = {
  matcher: ["/my-page/:path*", "/game-create/:path*"]
}
