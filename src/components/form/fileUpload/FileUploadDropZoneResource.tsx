"use client"

import { DropzoneOptions } from "react-dropzone"
import { FileInput, FileUploaderInformation } from "./_components"
import { FileUploader } from "./_components/FileUploader"
import Image from "next/image"

interface Params {
  value: File[] | null
  onValueChange: (files: File[] | null) => void
  isThumbnail?: boolean
  thumbnailClassName?: string
  isFileName?: boolean
  rounded?: boolean
  multiple?: boolean
  maxFiles?: number
}

const FileUploadDropZoneResource = ({
  value,
  onValueChange,
  rounded = true,
  multiple = true,
  maxFiles = 20
}: Params) => {
  const dropzone = {
    accept: {
      // "image/*": [".jpg", ".jpeg", ".png"]
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"]
    },
    multiple,
    maxFiles,
    maxSize: 4 * 1024 * 1024 // MB 단위
  } satisfies DropzoneOptions

  return (
    <>
      {value && value.length > 0 ? (
        <div className="relative aspect-[5/4] w-full">
          <Image src={URL.createObjectURL(value[0])} alt={value[0].name} fill className="rounded-[8px] object-cover" />
        </div>
      ) : (
        <FileUploader value={value} onValueChange={onValueChange} dropzoneOptions={dropzone}>
          <FileInput className="border-2 border-dashed border-line-normal bg-background" rounded={rounded}>
            <div className="flex w-full flex-col items-center justify-center py-[16px]">
              <FileUploaderInformation />
            </div>
          </FileInput>
        </FileUploader>
      )}
    </>
  )
}

export default FileUploadDropZoneResource
