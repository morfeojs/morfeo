import { Component, ComponentConfig, Style, Variant } from '@morfeo/spec';
import { deepMerge } from '../utils';
import theme from './theme';

type ComponentStyle = Omit<ComponentConfig, 'variants'>;

type GetConfigProperty<C extends Component> = {
  name: C;
  variant?: Variant<C>;
  property: keyof ComponentConfig;
};

function components() {
  function get<C extends Component>(name: C, variant?: Variant<C>) {
    const config = theme.getValue('components', name);
    if (!variant || !config) {
      return config;
    }
    const { variants, ...rest } = config;

    return variants ? deepMerge(rest, variants[variant as any]) : config;
  }

  function getConfig<C extends Component>({
    name,
    variant,
    property,
  }: GetConfigProperty<C>) {
    const config = get(name, variant);
    return config ? config[property] : undefined;
  }

  return {
    get,
    getConfig,
  };
}

/**
 * component
 * This utility makes it easier to access the properties of the components inside the theme.
 * When you're requesting properties of variants, they'll be automatically merged with the base configuration.
 *
 * @param name the name of the components inside the theme
 * @param variant (optional) the variant of the component
 *
 * @example
 * const buttonStyle = component('Button').getStyle();
 * const primaryButtonStyle = component('Button', 'primary').getStyle();
 *
 * const typographyTag = component('Typography').getTag();
 */
export function component<C extends Component>(name: C, variant?: Variant<C>) {
  const { get, getConfig } = components();

  function getTag() {
    return getConfig({ name, variant, property: 'tag' });
  }

  function getStyle(): Style {
    return getConfig({ name, variant, property: 'style' });
  }

  function getProps() {
    return getConfig({ name, variant, property: 'props' });
  }

  function getVariants(): Record<Variant<C>, ComponentStyle> {
    return getConfig({ name, property: 'variants' });
  }

  return {
    get: () => get(name, variant),
    getTag,
    getStyle,
    getProps,
    getVariants,
  };
}
