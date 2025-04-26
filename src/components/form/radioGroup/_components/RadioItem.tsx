import * as RadioGroup from "@radix-ui/react-radio-group"

export const RadioItem: React.FC<SelectOptionType> = ({ id, value, label, selected }) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroup.Item id={id} value={value} className="h-[20px] w-[20px] rounded-full border border-gray-200">
        <RadioGroup.Indicator className="flex h-full w-full items-center justify-center rounded-full bg-primary-normal" />
      </RadioGroup.Item>
      <label htmlFor={id} className={selected ? "text-primary-20" : "text-gray"}>
        {label}
      </label>
    </div>
  )
}
