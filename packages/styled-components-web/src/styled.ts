import { parsers, theme, Theme, Style, Component } from '@morfeo/web';
import styled, {
  StyledInterface,
  StyledComponent,
  ThemedStyledFunction,
} from 'styled-components';

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
    const currentStyle = parsers.resolve({ style: currentProps });
    return {
      ...acc,
      ...currentStyle,
    };
  }, {});

  return allProps;
}

const morfeoStyledHandler: MorfeoStyled = ((tag: ComponentTag) => {
  const { style, props: defaultComponentProps } =
    theme.getValue('components', tag as any) || {};
  const componentTag = style?.componentTag || tag;
  const styledFunction = styled[componentTag] as ThemedStyledFunction<
    keyof StyledInterface,
    Theme,
    Style
  >;

  if (typeof styledFunction === 'function') {
    return (componentProps: Style | TemplateStringsArray = {}) => {
      if (!isStyleProps(componentProps)) {
        return styledFunction(componentProps);
      }

      // TODO: get props from variant

      return styledFunction.attrs(defaultComponentProps as any)(
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
