export interface PresignedUrlResponse {
  /** S3 업로드용 Presigned URL (PUT 전용, 10분 유효) */
  uploadUrl?: string
  /** DB 저장용 클린 S3 URL (만료 없음) */
  fileUrl?: string
}
