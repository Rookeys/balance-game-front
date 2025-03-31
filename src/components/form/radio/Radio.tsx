interface Params {
  id: string
  value: string
  label?: string
  checked: boolean
  onChange: () => void
}

export default function Radio({ id, value, label, checked, onChange }: Params) {
  return (
    <div className="flex items-center gap-[4px]">
      <input type="radio" id={id} value={value} checked={checked} onChange={onChange} />
      {label && <label htmlFor={id}>{label}</label>}
    </div>
  )
}
