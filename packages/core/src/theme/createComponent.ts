import {
  Component,
  ComponentConfig,
  State,
  Style,
  Variant,
} from '@morfeo/spec';
import { deepMerge } from '@morfeo/utils';
import { ThemeHandler } from './createTheme';

type ComponentStyle = Omit<ComponentConfig, 'variants'>;

type GetConfigProperty<C extends Component> = {
  name: C;
  merge?: boolean;
  variant?: Variant<C>;
  property: keyof ComponentConfig;
  state?: State<C>;
};

export function createComponent(theme: Omit<ThemeHandler, 'component'>) {
  function get<C extends Component>({
    name,
    variant,
    merge,
    state,
  }: Omit<GetConfigProperty<C>, 'property'>) {
    const config = theme.getValue('components', name);

    if (!config) {
      return config;
    }

    if (!variant) {
      if (state) {
        return {
          ...config,
          style: deepMerge(config.style, config.states[state]),
        };
      }
      return config;
    }

    const { variants, ...rest } = config;

    if (variants) {
      const currentStateStyle =
        state && variants[variant].states && variants[variant].states[state];
      if (currentStateStyle) {
        const variantWithStateStyle = {
          ...variants[variant],
          style: deepMerge(variants[variant].style as any, currentStateStyle),
        };
        return variantWithStateStyle;
      }
      return merge ? deepMerge(rest, variants[variant]) : variants[variant];
    }

    return config;
  }

  function getConfig<C extends Component>({
    name,
    merge = true,
    variant,
    property,
    state,
  }: GetConfigProperty<C>) {
    const config = get({ name, variant, merge, state });
    return config ? config[property] : undefined;
  }

  function getComponentStyle<C extends Component>(
    name: C,
    variant?: Variant<C>,
    state?: State<C>,
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
  return function component<C extends Component>(
    name: C,
    variant?: Variant<C>,
    state?: State<C>,
  ) {
    function getTag() {
      return getConfig({ name, variant, property: 'tag' });
    }

    function getStyle(): Style {
      const style = getComponentStyle(name, variant, state);
      return style;
    }

    function getProps() {
      return getConfig({ name, variant, property: 'props' });
    }

    function getVariants(): Record<Variant<C>, ComponentStyle> {
      return getConfig({ name, property: 'variants' });
    }

    function getStates(): Record<State<C>, ComponentStyle> {
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
