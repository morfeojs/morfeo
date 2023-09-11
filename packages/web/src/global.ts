import type { Style } from '@morfeo/core';

/**
 * @example
 *
 * ```tsx
 * import { morfeo } from '@morfeo/web';
 *
 * morfeo.global({
 *    body: {
 *      px: 'm',
 *    }
 * });
 * ```
 */
export function global(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _styles: Record<string, Style>,
): void {
  return;
}
