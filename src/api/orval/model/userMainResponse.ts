/**
 * 유저 정보
 */
export interface UserMainResponse {
  /** 제작자 닉네임 */
  nickname?: string
  /** 제작자 이메일 */
  email?: string
  /** 프로필 사진 URL */
  profileImageUrl?: string
  /** 팔로우 여부 */
  isFollowing?: boolean
}
