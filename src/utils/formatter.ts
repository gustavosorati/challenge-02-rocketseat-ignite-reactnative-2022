export function dateFormatter (value: string) {
  return value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
}

export function timeFormatter (value: string) {
  return value.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1:$2')
}
