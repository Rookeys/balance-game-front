export interface GameResourceCommentRequest {
  /** 부모 댓글 Id */
  parentId?: number
  /**
   * 댓글
   * @minLength 0
   * @maxLength 500
   */
  comment: string
}
