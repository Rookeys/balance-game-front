interface Params {
  text: string
}
export default function CategoryLabel({ text }: Params) {
  return (
    <p className="rounded-[4px] bg-secondary-alternative px-[8px] py-[4px] text-label-medium text-secondary-on-primary">
      {text}
    </p>
  )
}
