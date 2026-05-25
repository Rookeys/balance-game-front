export type GetFollowersParams = {
  /**
   * 사용자 이메일
   */
  email: string
  /**
   * 커서 ID (페이징 처리용)
   */
  cursorId?: number
  /**
   * 한 페이지 당 출력 개수
   */
  size?: number
}
