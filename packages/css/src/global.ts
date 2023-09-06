import type { Style } from '@morfeo/web';

/**
 * @example
 *
 * ```tsx
 * import { morfeo } from '@morfeo/css';
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
