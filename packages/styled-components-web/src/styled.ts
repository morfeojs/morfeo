import { parsers, theme, Theme, Style, Component } from '@morfeo/web';
import styled, { StyledInterface, StyledComponent } from 'styled-components';

type ComponentTag = keyof StyledInterface | Component;
type MorfeoStyledComponent<K extends keyof StyledInterface, P extends Style> =
  StyledComponent<K, Theme, P>;

type MorfeoStyledCallback = <P extends Style = Style>(
  tag: keyof StyledInterface,
) => MorfeoStyledComponent<typeof tag, P>;

type MorfeoStyled<P extends Style | TemplateStringsArray = Style> =
  MorfeoStyledCallback &
    {
      [K in keyof StyledInterface]: (
        props: P | TemplateStringsArray,
      ) => P extends Style
        ? MorfeoStyledComponent<K, P>
        : MorfeoStyledComponent<K, any>;
    } &
    {
      [K in Component]: (
        props: P | TemplateStringsArray,
      ) => P extends Style
        ? MorfeoStyledComponent<keyof StyledInterface, P>
        : MorfeoStyledComponent<any, any>;
    };

function isStyleProps(arg: any): arg is Style {
  return !Array.isArray(arg) && typeof arg === 'object';
}

export function propsParser(...props: any[]) {
  const allProps = props.reduce((acc, currentProps) => {
    const { theme: _, children, ...rest } = currentProps;
    const currentStyle = parsers.resolve({ style: rest });
    return {
      ...acc,
      ...currentStyle,
    };
  }, {});

  return allProps;
}

const morfeoStyledHandler: MorfeoStyled = ((tag: ComponentTag) => {
  const { style } = theme.getValue('components', tag as any) || {};
  const componentTag = style?.componentTag || tag;
  const styledFunction = styled[componentTag];

  if (typeof styledFunction === 'function') {
    return (componentProps: Style | TemplateStringsArray = {}) => {
      if (!isStyleProps(componentProps)) {
        return styledFunction(componentProps);
      }

      return styledFunction(
        props =>
          propsParser({ componentName: tag, ...props }, componentProps) as any,
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
