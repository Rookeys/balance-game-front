import "next-auth"

declare module "next-auth" {
  interface Session {
    // user: {
    //   name?: string | null
    //   email?: string | null
    //   image?: string | null
    // }
    accessToken?: string
    refreshToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
    refreshToken?: string
    // accessTokenExpires?: number
  }
}
