import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "img1.kakaocdn.net"
      },
      {
        protocol: "https",
        hostname: "balance-game.s3.ap-northeast-2.amazonaws.com"
      },
      {
        protocol: "http",
        hostname: "k.kakaocdn.net"
      }
    ]
  }
}

export default nextConfig
