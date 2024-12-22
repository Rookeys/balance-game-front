"use client"

import Image from "next/image"
import { useState } from "react"
import { DropzoneOptions } from "react-dropzone"
import { FileInput, FileUploaderInformation, FileUploaderItem } from "./_components"
import { FileUploader } from "./_components/FileUploader"

const FileUploadDropzone = () => {
  const [files, setFiles] = useState<File[] | null>([])

  const dropzone = {
    accept: {
      "image/*": [".jpg", ".jpeg", ".png"]
    },
    multiple: true,
    maxFiles: 20,
    maxSize: 4 * 1024 * 1024 // MB 단위
  } satisfies DropzoneOptions

  return (
    <FileUploader value={files} onValueChange={setFiles} dropzoneOptions={dropzone}>
      <FileInput className="border-2 border-dashed border-blue">
        <div className="flex items-center justify-center flex-col py-4 w-full">
          <FileUploaderInformation />
        </div>
      </FileInput>
      <section className="flex items-center flex-row gap-[12px] flex-wrap">
        {files?.map((file, i) => (
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
    </FileUploader>
  )
}

export default FileUploadDropzone
