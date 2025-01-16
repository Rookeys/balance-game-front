import "next-auth"

declare module "next-auth" {
  interface Session {
    // user: {
    //   id?: string
    //   name?: string
    //   email?: string
    //   image?: string
    // }
    access_token?: string
    refresh_token?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    access_token?: string
    refresh_token?: string
    // accessTokenExpires?: number
  }
}
