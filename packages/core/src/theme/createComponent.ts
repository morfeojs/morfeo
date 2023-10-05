import {
  Theme,
  MorfeoStyle,
  ComponentName,
  ComponentState,
  ComponentConfig,
  ComponentVariant,
} from '@morfeo/spec';
import { DeepPartial, deepMerge } from '@morfeo/utils';
import { ThemeHandler } from './createTheme';

type ComponentStyle<T extends Partial<Theme>> = Omit<
  ComponentConfig<T>,
  'variants'
>;

type GetConfigProperty<T extends Partial<Theme>, C extends ComponentName<T>> = {
  name: C;
  merge?: boolean;
  state?: ComponentState<T, C>;
  variant?: ComponentVariant<T, C>;
  property: keyof ComponentConfig<T>;
};

function isValidConfig<T extends Partial<Theme>>(
  config: any,
): config is ComponentConfig<T> {
  return !!config && typeof config === 'object';
}

export function createComponent<T extends Partial<Theme>>(
  theme: Omit<ThemeHandler<T>, 'component'>,
) {
  function get<C extends ComponentName<T>>({
    name,
    variant,
    merge,
    state,
  }: Omit<GetConfigProperty<T, C>, 'property'>) {
    const config = theme.getValue('components', name);

    if (!isValidConfig<T>(config)) {
      return config;
    }

    if (!variant) {
      if (state) {
        return {
          ...config,
          style: deepMerge(config.style, config.states[state as any]),
        };
      }
      return config;
    }

    const { variants, ...rest } = config;

    if (variants) {
      const currentStateStyle =
        state &&
        variants[variant as any].states &&
        variants[variant as any].states[state as any];
      if (currentStateStyle) {
        const variantWithStateStyle = {
          ...variants[variant as any],
          style: deepMerge(variants[variant as any].style, currentStateStyle),
        };
        return variantWithStateStyle;
      }
      return merge
        ? deepMerge(rest, variants[variant as any])
        : variants[variant as any];
    }

    return config;
  }

  function getConfig<C extends ComponentName<T>>({
    name,
    merge = true,
    variant,
    property,
    state,
  }: GetConfigProperty<T, C>) {
    const config = get({ name, variant, merge, state });
    return config ? config[property] : undefined;
  }

  function getComponentStyle<C extends ComponentName<T>>(
    name: C,
    variant?: ComponentVariant<T, C>,
    state?: ComponentState<T, C>,
  ) {
    const stateForBaseStyle = variant && state ? {} : state;
    const baseStyle =
      getConfig({ name, property: 'style', ...stateForBaseStyle }) || {};
    const variantStyle =
      getConfig({ name, variant, property: 'style', merge: false, state }) ||
      {};
    const {
      componentName: baseComponentName,
      variant: baseVariant,
      ...restBaseStyle
    } = baseStyle;

    const {
      componentName: variantComponentName,
      variant: variantVariant,
      ...restVariantStyle
    } = variantStyle;

    const baseComponentStyle = baseComponentName
      ? getComponentStyle(baseComponentName, baseVariant)
      : {};

    const variantComponentStyle = variantComponentName
      ? getComponentStyle(variantComponentName, variantVariant)
      : {};

    return {
      ...baseComponentStyle,
      ...restBaseStyle,
      ...variantComponentStyle,
      ...restVariantStyle,
    };
  }

  /**
   * component
   * This utility makes it easier to access the properties of the components inside the theme.
   * When you're requesting properties of variants, they'll be automatically merged with the base configuration.
   *
   * @example
   * const buttonStyle = component('Button').getStyle();
   * const primaryButtonStyle = component('Button', 'primary').getStyle();
   *
   * const typographyTag = component('Typography').getTag();
   */
  return function component<C extends ComponentName<T>>(
    name: C,
    variant?: ComponentVariant<T, C>,
    state?: ComponentState<T, C>,
  ) {
    function getTag() {
      return getConfig({ name, variant, property: 'tag' });
    }

    function getStyle(): MorfeoStyle<T, C> {
      const style = getComponentStyle(name, variant, state);
      return style;
    }

    function getProps() {
      return getConfig({ name, variant, property: 'props' });
    }

    function getVariants(): Record<ComponentVariant<T, C>, ComponentStyle<T>> {
      return getConfig({ name, property: 'variants' });
    }

    function getStates(): Record<ComponentState<T, C>, ComponentStyle<T>> {
      return getConfig({ name, variant, property: 'states', merge: false });
    }

    function getWithStyle() {
      return {
        ...get({ name, variant, merge: true, state }),
        style: getStyle(),
      };
    }

    return {
      get: getWithStyle,
      getTag,
      getStyle,
      getProps,
      getStates,
      getVariants,
    };
  };
}
