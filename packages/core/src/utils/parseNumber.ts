export function parseNumber(number: string | number) {
  if (typeof number !== 'string') {
    return number;
  }

  const match = number.match(/(\d+)/);

  return match ? Number(match[0]) : 0;
}
