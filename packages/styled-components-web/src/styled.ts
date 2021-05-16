import { parsers, theme, Theme, Style, Component } from '@morfeo/web';
import styled, { ThemedStyledFunction } from 'styled-components';
import { MorfeoStyled, ComponentTag } from './types';

function isStyleProps(arg: any): arg is Style {
  return !Array.isArray(arg) && typeof arg === 'object';
}

export function propsParser(...props: any[]) {
  const mergedProps = props.reduce(
    (acc, currentProps) => ({ ...acc, ...currentProps }),
    {},
  );
  return parsers.resolve({ style: mergedProps });
}

export function attributesParser<P extends Style>(
  props: P,
  componentName: Component,
) {
  const {
    tag: componentTag,
    props: componentProps = {},
    variants = {},
  } = theme.getValue('components', componentName);
  const variant = props.variant || componentProps.variant;
  if (!variant || !variants || !variants[variant]) {
    return {
      as: componentTag,
      ...componentProps,
      ...props,
    };
  }
  const { props: variantProps, tag: variantTag } = variants[variant];

  return {
    as: variantTag || componentTag,
    ...componentProps,
    ...variantProps,
    ...props,
  };
}

function getDisplayName(componentName: string, variant?: string) {
  if (variant) {
    return `${componentName}.${variant}`;
  }

  return componentName;
}

const morfeoStyledHandler: MorfeoStyled = ((tag: ComponentTag) => {
  const { tag: themeTag } = theme.getValue('components', tag as any) || {};
  const componentTag = themeTag || tag;
  const styledFunction =
    (styled[componentTag] as ThemedStyledFunction<
      keyof JSX.IntrinsicElements,
      Theme,
      Style
    >) || styled.div;

  if (typeof styledFunction === 'function') {
    return (componentProps: Style | TemplateStringsArray = {}) => {
      if (!isStyleProps(componentProps)) {
        return styledFunction(componentProps);
      }

      return styledFunction
        .withConfig({
          displayName: getDisplayName(tag, componentProps.variant),
        } as any)
        .attrs(props => attributesParser(props as any, tag as any))(
        props =>
          propsParser({ componentName: tag }, componentProps, props) as any,
      );
    };
  }
}) as any;

export const morfeoStyled = new Proxy(morfeoStyledHandler, {
  get(target, prop, receiver) {
    const result = target(prop as any);
    if (result) {
      return result;
    }

    return Reflect.get(styled, prop, receiver);
  },
});
