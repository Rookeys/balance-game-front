export interface FollowUserResponse {
  /** 닉네임 */
  nickname?: string
  /** 이메일 */
  email?: string
  /** 프로필 사진 URL */
  fileUrl?: string
  /** 팔로우 여부 */
  isFollowing?: boolean
  /** 팔로우 버튼 표시 여부 */
  showFollowButton?: boolean
}
