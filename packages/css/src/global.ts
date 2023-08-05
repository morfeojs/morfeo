import type { Style } from '@morfeo/web';

/**
 *
 * > **IMPORTANT**
 * >
 * > This function is meant to be replaced at build-time, be sure the `@morfeo/compiler` plugin is used.
 *
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
  styles: Record<string, Style>,
): void {
  return;
}
