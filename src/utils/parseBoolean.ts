export const parseBoolean = (value: string | undefined): boolean => {
  if (value === "true") {
    return true
  } else if (value === "false") {
    return false
  }
  return false
}
