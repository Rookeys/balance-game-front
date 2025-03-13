import type { PresignedUrlRequest, PresignedUrlsRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * AWS S3 저장소에 업로드할 수 있는 단일 URL 발급
 * @summary 단일 업로드 API (User Profile)
 */
export const getPreSignedUrlForUser = (
  presignedUrlRequest: BodyType<PresignedUrlRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<string>(
    {
      url: `/api/v1/media/single`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: presignedUrlRequest,
      signal
    },
    options
  )
}

/**
 * AWS S3 저장소에 업로드할 수 있는 다중 URL 발급
 * @summary 다중 업로드 API
 */
export const getPreSignedUrl = (
  presignedUrlsRequest: BodyType<PresignedUrlsRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<string[]>(
    {
      url: `/api/v1/media/multiple`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: presignedUrlsRequest,
      signal
    },
    options
  )
}
