"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { DropzoneOptions } from "react-dropzone"
import { FileInput, FileUploaderInformation } from "./_components"
import { FileUploader } from "./_components/FileUploader"

const FileUploaderItem = dynamic(() => import("./_components/FileUploaderItem").then((mod) => mod.FileUploaderItem))

interface Params {
  value: File[] | null
  onValueChange: (files: File[] | null) => void
  isThumbnail?: boolean
  isFileName?: boolean
  rounded?: boolean
  multiple?: boolean
  maxFiles?: number
}

const FileUploadDropZone = ({
  value,
  onValueChange,
  isThumbnail = true,
  isFileName = false,
  rounded = true,
  multiple = true,
  maxFiles = 20
}: Params) => {
  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"]
    },
    multiple,
    maxFiles,
    maxSize: 4 * 1024 * 1024 // MB 단위
  } satisfies DropzoneOptions

  return (
    <FileUploader value={value} onValueChange={onValueChange} dropzoneOptions={dropzone}>
      <FileInput className="border-2 border-dashed border-blue" rounded={rounded}>
        <div className="flex items-center justify-center flex-col py-4 w-full">
          <FileUploaderInformation />
        </div>
      </FileInput>
      {isThumbnail && value && value.length > 0 && (
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
      {isFileName && value && value.length > 0 && (
        <section className="flex flex-col gap-[12px]">
          {value?.map((file, i) => (
            <FileUploaderItem key={i} index={i} className="p-2">
              {/* <Paperclip className="h-4 w-4 flex-shrink-0 stroke-current" /> */}
              <p className="line-clamp-2 w-full break-all">{file.name}</p>
            </FileUploaderItem>
          ))}
        </section>
      )}
    </FileUploader>
  )
}

export default FileUploadDropZone
