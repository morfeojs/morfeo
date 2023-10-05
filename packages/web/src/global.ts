import type { MorfeoStyle, Theme } from '@morfeo/core';

/**
 * @example
 *
 * ```tsx
 * morfeo.global({
 *    body: {
 *      px: 'm',
 *    }
 * });
 * ```
 */
export function global<T extends Partial<Theme>>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _styles: Record<string, MorfeoStyle<T>>,
): void {
  return;
}
