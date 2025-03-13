export interface LoginResponse {
  /** 닉네임 */
  nickname?: string
  /** 이메일 */
  email?: string
  /** 프로필 사진 URL */
  fileUrl?: string
  /** 액세스 토큰 */
  accessToken?: string
  /** 리프레쉬 토큰 */
  refreshToken?: string
  /** 액세스 토큰 만료 시간 */
  accessTokenExpiresAt?: number
  /** 리프레쉬 토큰 만료 시간 */
  refreshTokenExpiresAt?: number
}
