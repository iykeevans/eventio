const trimString = (value: string, maxStringLength: number): string =>
  value.length > maxStringLength
    ? `${value.substring(0, maxStringLength)}...`
    : value

export default trimString
