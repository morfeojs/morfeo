export function isDefaultObject(
  value: Record<string, unknown>,
): value is { default: unknown } {
  return !!value.default;
}
