export interface GameResultCommentResponse {
  /** 댓글 ID */
  commentId?: number
  /** 댓글 내용 */
  comment?: string
  /** 작성자 닉네임 */
  nickname?: string
  /** 작성 시간 */
  createdDateTime?: string
  /** 수정 시간 */
  updatedDateTime?: string
  /** 좋아요 총합 */
  like?: number
  /** 좋아요 클릭 유무 */
  existsLiked?: boolean
  /** 작성자 본인 확인 */
  existsWriter?: boolean
}
