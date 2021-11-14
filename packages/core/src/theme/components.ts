import { Component, ComponentConfig, Style, Variant } from '@morfeo/spec';
import { deepMerge } from '../utils';
import theme from './theme';

type ComponentStyle = Omit<ComponentConfig, 'variants'>;

type GetConfigProperty<C extends Component> = {
  name: C;
  merge?: boolean;
  variant?: Variant<C>;
  property: keyof ComponentConfig;
};

function get<C extends Component>(
  name: C,
  variant?: Variant<C>,
  merge?: boolean,
) {
  const config = theme.getValue('components', name);

  if (!variant || !config) {
    return config;
  }

  const { variants, ...rest } = config;

  if (variants) {
    return merge
      ? deepMerge(rest, variants[variant as any])
      : variants[variant as any];
  }

  return config;
}

function getConfig<C extends Component>({
  name,
  merge = true,
  variant,
  property,
}: GetConfigProperty<C>) {
  const config = get(name, variant, merge);
  return config ? config[property] : undefined;
}

function getComponentStyle<C extends Component>(name: C, variant?: Variant<C>) {
  const baseStyle = getConfig({ name, property: 'style' }) || {};
  const variantStyle =
    getConfig({ name, variant, property: 'style', merge: false }) || {};

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
  function getTag() {
    return getConfig({ name, variant, property: 'tag' });
  }

  function getStyle(): Style {
    return getComponentStyle(name, variant);
  }

  function getProps() {
    return getConfig({ name, variant, property: 'props' });
  }

  function getVariants(): Record<Variant<C>, ComponentStyle> {
    return getConfig({ name, property: 'variants' });
  }

  function _get() {
    return {
      ...get(name, variant, true),
      style: getStyle(),
    };
  }

  return {
    get: _get,
    getTag,
    getStyle,
    getProps,
    getVariants,
  };
}
