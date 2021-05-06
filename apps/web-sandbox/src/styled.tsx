import React from 'react';
import { theme, parsers, Component, Style, Theme } from '@morfeo/web';
import styled, { StyledComponent } from 'styled-components';

export function customStyled(component: Component) {
  const { components } = theme.get();
  const config = components[component];
  const tag = (config.style.componentTag || component) as
    | keyof JSX.IntrinsicElements
    | React.ComponentType<any>;

  const result = function (props: any) {
    const variant = props.variant as any;
    const variantTag = (props.variant && config.variants
      ? config.variants[variant].componentTag
      : tag) as keyof JSX.IntrinsicElements | React.ComponentType<any>;

    const Component = styled<any>(variantTag || (tag as any))(
      ({ theme: styledTheme, children, ...style }) => {
        return parsers.resolve({
          style: { componentName: component, ...(style as Style) },
        });
      },
    ) as StyledComponent<keyof JSX.IntrinsicElements, Theme, Style>;

    return <Component {...props} />;
  };

  return result as StyledComponent<keyof JSX.IntrinsicElements, Theme, Style>;
}
