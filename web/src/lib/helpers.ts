export const isValidUrl = (toCheck: string) => {
  try {
    return new URL(toCheck) && true
  } catch {
    return false
  }
}

export const isValidColor = (toCheck: string) => {
  const s = new Option().style
  s.color = toCheck
  return !!s.color
}
