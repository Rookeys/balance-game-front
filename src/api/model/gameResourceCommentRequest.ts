export interface GameResourceCommentRequest {
  /** 부모 댓글 Id */
  parentId?: number
  /** 댓글 */
  comment: string
}
