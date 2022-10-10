export const isValidUrl = (toCheck: string) => {
  try {
    return new URL(toCheck) && true
  } catch {
    return false
  }
}
