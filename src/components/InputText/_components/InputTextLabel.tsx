interface Params {
  id: string
  label: string
  required?: boolean
}

export default function InputTextLabel({ id, label, required }: Params) {
  return (
    <label htmlFor={id} className="flex gap-[4px]">
      <p>{label}</p>
      {required && (
        <span aria-hidden="true" className="text-red">
          *
        </span>
      )}
    </label>
  )
}
