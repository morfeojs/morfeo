import { Component, Theme, theme, Variant } from '@morfeo/core';
import { useForceReRender } from './useSubscribe';

/**
 * useProps
 * It returns the default properties of the component.
 * @param componentName the name of the component inside the Theme components slice
 * @param variant the component variant
 * @returns the component's default props
 */
export function useProps<C extends Component>(
  componentName: C,
  variant?: Variant<C>,
) {
  useForceReRender();
  const { props, variants = {} } =
    theme.getValue('components', componentName) || {};
  const { props: variantProps } = (variants as any)[variant] || {};

  return {
    ...props,
    ...variantProps,
  } as Theme['components'][C]['props'];
}
