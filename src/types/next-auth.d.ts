import "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      // id?: string
      nickname?: string
      email?: string
      image?: string
    }
    access_token?: string
    refresh_token?: string
    access_token_expires_at: number
    refresh_token_expires_at: number
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string
    refresh_token?: string
    access_token_expires_at: number
    refresh_token_expires_at: number
    image?: string
    nickname?: string
  }
}
