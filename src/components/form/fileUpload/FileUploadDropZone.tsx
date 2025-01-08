"use client"

import Image from "next/image"
import { DropzoneOptions } from "react-dropzone"
import { FileInput, FileUploaderInformation, FileUploaderItem } from "./_components"
import { FileUploader } from "./_components/FileUploader"

interface Params {
  value: File[] | null
  onValueChange: (files: File[] | null) => void
  isThumbnail?: boolean
  rounded?: boolean
}

const FileUploadDropZone = ({ value, onValueChange, isThumbnail = true, rounded = true }: Params) => {
  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"]
    },
    multiple: true,
    maxFiles: 20,
    maxSize: 4 * 1024 * 1024 // MB 단위
  } satisfies DropzoneOptions

  return (
    <FileUploader value={value} onValueChange={onValueChange} dropzoneOptions={dropzone}>
      <FileInput className="border-2 border-dashed border-blue" rounded={rounded}>
        <div className="flex items-center justify-center flex-col py-4 w-full">
          <FileUploaderInformation />
        </div>
      </FileInput>
      {isThumbnail && (
        <section className="flex items-center flex-row gap-[12px] flex-wrap">
          {value?.map((file, i) => (
            <FileUploaderItem key={i} index={i} className="p-2 rounded-sm overflow-hidden border">
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                height={80}
                width={80}
                className="rounded-xsm object-cover"
              />
            </FileUploaderItem>
          ))}
        </section>
      )}
    </FileUploader>
  )
}

export default FileUploadDropZone
