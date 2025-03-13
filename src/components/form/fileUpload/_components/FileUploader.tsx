"use client"

import { cn } from "@/utils/cn"
import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { DropzoneOptions, DropzoneState, FileRejection, useDropzone } from "react-dropzone"
import { toast } from "sonner"

interface Params {
  value: File[] | null
  onValueChange: (value: File[] | null) => void
  dropzoneOptions: DropzoneOptions
}

export const FileUploader = ({
  className,
  dropzoneOptions,
  value,
  onValueChange,
  children,
  ...props
}: Params & React.HTMLAttributes<HTMLDivElement>) => {
  const [isLimit, setIsLimit] = useState(false)
  const {
    accept = {
      // "image/*": [".jpg", ".jpeg", ".png"]
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"]
    },
    maxFiles = 1,
    maxSize = 4 * 1024 * 1024,
    multiple = true
  } = dropzoneOptions

  const removeFileFromSet = useCallback(
    (i: number) => {
      if (!value) return
      const newFiles = value.filter((_, index) => index !== i)
      onValueChange(newFiles)
    },
    [value, onValueChange]
  )

  const onDrop = useCallback(
    (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
      const files = acceptedFiles

      if (!files) {
        toast.error("파일 업로드에 실패했습니다.")
        return
      }

      const newValues: File[] = value ? [...value] : []

      files.forEach((file) => {
        if (newValues.length < maxFiles) {
          newValues.push(file)
        }
      })

      onValueChange(newValues)

      if (rejectedFiles.length > 0) {
        for (let i = 0; i < rejectedFiles.length; i++) {
          if (rejectedFiles[i].errors[0]?.code === "file-too-large") {
            toast.error(`파일이 너무 큽니다. 최대사이즈: ${maxSize / 1024 / 1024}MB`)
            break
          }

          if (rejectedFiles[i].errors[0]?.code === "file-invalid-type") {
            toast.error(`잘못된 파일 형식입니다.`)
            break
          }
          // file-invalid-type
          if (rejectedFiles[i].errors[0]?.message) {
            toast.error(rejectedFiles[i].errors[0].message)
            break
          }
        }
      }
    },
    [value, maxFiles, onValueChange, maxSize]
  )

  useEffect(() => {
    if (!value) return
    if (value.length === maxFiles) {
      setIsLimit(true)
      return
    }
    setIsLimit(false)
  }, [value, maxFiles])

  const options = dropzoneOptions ? dropzoneOptions : { accept, maxFiles, maxSize, multiple }

  const dropzoneState = useDropzone({
    ...options,
    onDrop
  })

  return (
    <FileUploaderContext.Provider
      value={{
        dropzoneState,
        isLimit,
        removeFileFromSet
      }}
    >
      <div className={cn("flex w-full flex-col gap-[12px] overflow-hidden focus:outline-none", className)} {...props}>
        {children}
      </div>
    </FileUploaderContext.Provider>
  )
}

type FileUploaderContextType = {
  dropzoneState: DropzoneState
  isLimit: boolean
  removeFileFromSet: (index: number) => void
}

const FileUploaderContext = createContext<FileUploaderContextType | null>(null)

export const useFileUpload = () => {
  const context = useContext(FileUploaderContext)
  if (!context) {
    throw new Error("useFileUpload should be used within a FileUploader Provider")
  }
  return context
}
