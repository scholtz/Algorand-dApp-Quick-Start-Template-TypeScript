export function ellipseAddress(address: string | null | undefined | string[], width = 6): string {
  if (!address) return ''
  const addr = Array.isArray(address) ? address[0] : address
  if (typeof addr !== 'string') return ''
  return `${addr.slice(0, width)}...${addr.slice(-width)}`
}
