interface Params {
  id: string
  errorMessage: string
}
export function InputTextErrorMessage({ id, errorMessage }: Params) {
  return (
    <p id={`${id}-error`} className="text-red" role="alert">
      {errorMessage}
    </p>
  )
}
