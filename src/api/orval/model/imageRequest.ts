export interface ImageRequest {
  /**
   * S3에 저장된 이미지 URL
   * @minItems 1
   * @maxItems 2147483647
   */
  urls?: string[]
}
