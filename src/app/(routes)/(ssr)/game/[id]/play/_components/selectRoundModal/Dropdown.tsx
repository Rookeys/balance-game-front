"use client"
import { useClickOutside } from "@/hooks/useClickOutside"
import { cn } from "@/utils/cn"
import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

interface Option {
  label: string
  value: string | number
}

interface DropdownProps {
  options?: Option[]
  value?: string | number
  onChange: (value: string | number) => void
  placeholder?: string
  disabled?: boolean
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  placeholder = "선택하세요",
  disabled = false,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const selected = options?.find((opt) => opt.value === value)

  useClickOutside(wrapperRef, () => setIsOpen(false))

  return (
    <div className={`relative w-full ${className}`} ref={wrapperRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        disabled={disabled}
        className={cn(
          `flex w-full items-center justify-between rounded-[4px] border px-[12px] py-[8px]`,
          isOpen ? "border-gray-400" : "border-gray-300"
        )}
      >
        <span className={cn(selected ? "text-black" : "text-gray-400")}>{selected ? selected.label : placeholder}</span>
        <ChevronDown size={24} />
      </button>

      {isOpen && (
        <ul
          className={cn(
            "absolute z-10 mt-[4px] w-full divide-y-[1px] overflow-auto rounded-[4px] border border-gray-300 bg-white py-[8px] shadow-md",
            "max-h-[264px]"
          )}
        >
          {options?.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setIsOpen(false)
              }}
              className={cn(
                "transition-color-custom cursor-pointer px-[12px] py-[12px] text-start hover:bg-blue-100"
                // option.value === value && "bg-blue-10"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// "use client"
// import { useState, useRef, useEffect } from "react"
// import { ChevronDown } from "lucide-react"
// import { cn } from "@/utils/cn"

// interface Option {
//   label: string
//   value: string | number
// }

// interface DropdownProps {
//   options?: Option[]
//   value?: string | number
//   onChange: (value: string | number) => void
//   placeholder?: string
//   disabled?: boolean
//   className?: string
// }

// export const Dropdown: React.FC<DropdownProps> = ({
//   options,
//   value,
//   onChange,
//   placeholder = "선택하세요",
//   disabled = false,
//   className = ""
// }) => {
//   const [isOpen, setIsOpen] = useState(false)
//   const ref = useRef<HTMLDivElement>(null)

//   const selected = options?.find((opt) => opt.value === value)

//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (ref.current && !ref.current.contains(e.target as Node)) {
//         setIsOpen(false)
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   return (
//     <div className={`relative w-full ${className}`} ref={ref}>
//       <button
//         type="button"
//         onClick={() => !disabled && setIsOpen((prev) => !prev)}
//         disabled={disabled}
//         className={cn(
//           `flex w-full items-center justify-between rounded-[4px] border px-[12px] py-[8px]`,
//           isOpen ? "border-gray-400" : "border-gray-300"
//         )}
//       >
//         <span className={cn(selected ? "text-black" : "text-gray-400")}>{selected ? selected.label : placeholder}</span>
//         <ChevronDown size={24} />
//       </button>

//       {isOpen && (
//         <ul className="absolute z-10 mt-[4px] w-full divide-y-[1px] overflow-auto rounded-[4px] border border-gray-300 bg-white px-[12px] py-[8px] shadow-md">
//           {options?.map((option) => (
//             <li
//               key={option.value}
//               onClick={() => {
//                 onChange(option.value)
//                 setIsOpen(false)
//               }}
//               className={cn(
//                 "cursor-pointer py-[12px] text-start hover:bg-gray-100",
//                 option.value === value && "bg-blue-10"
//               )}
//             >
//               {option.label}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }
