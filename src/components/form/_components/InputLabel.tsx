import { cn } from "@/utils/cn"

interface Params {
  id?: string
  label: string
  required?: boolean
  className?: string
}

export function InputLabel({ id, label, required, className }: Params) {
  return (
    <label htmlFor={id} className={cn("flex gap-[4px]", className)}>
      <p>{label}</p>
      {required && (
        <span aria-hidden="true" className="text-red">
          *
        </span>
      )}
    </label>
  )
}
