export interface UserRequest {
  /**
   * 닉네임
   * @pattern ^[a-zA-Z0-9가-힣]+$
   */
  nickname?: string
  /** 프로필 사진 URL */
  url?: string
}
