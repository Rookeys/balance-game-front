interface Params {
  id: string
  errorMessage: string
}
export default function InputTextErrorMessage({ id, errorMessage }: Params) {
  return (
    <div id={`${id}-error`} className="text-red" role="alert">
      {errorMessage}
    </div>
  )
}
