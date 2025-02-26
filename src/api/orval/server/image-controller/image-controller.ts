import type { ImageRequest } from "../../model"
import { customServerInstance } from "../../../serverInstance"
import type { BodyType } from "../../../serverInstance"

type SecondParameter<T extends (...args: any) => any> = Parameters<T>[1]

/**
 * S3에 업로드한 URL을 차례대로 저장함.
 * @summary 게임 리소스 사진 저장 API
 */
export const saveImageForGame = (
  gameId: number,
  imageRequest: BodyType<ImageRequest>,
  options?: SecondParameter<typeof customServerInstance>,
  signal?: AbortSignal
) => {
  return customServerInstance<boolean>(
    {
      url: `/api/v1/games/${encodeURIComponent(String(gameId))}/media/images`,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: imageRequest,
      signal
    },
    options
  )
}
