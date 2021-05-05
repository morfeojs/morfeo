// import React from 'react';
// import scStyled, { StyledInterface } from 'styled-components';
// import { Component, theme, parsers, Style, Theme } from '@morfeo/web';

// const customStyled = (tag: keyof StyledInterface) => {
//   const callback = <P extends Style & { theme: Theme }>({
//     theme: styledTheme,
//     ...style
//   }: P) => scStyled[tag](parsers.resolve({ style }));

//   const styledKeys = Object.keys(scStyled) as (keyof StyledInterface)[];

//   for (let tag of styledKeys) {
//     callback[tag] = callback(tag);
//   }

//   return callback;
// };

// export function themeComponent(component: Component) {
//   const { components } = theme.get();
//   const config = components[component];
//   const tag = config.style.componentTag || component;

//   return (props: Style = {}) => {
//     const variant = props.variant;
//     const variantTag =
//       variant && config.variants ? config.variants[variant].componentTag : tag;

//     const Component = customStyled(variantTag || tag) as React.FC<Style>;

//     return <Component {...props} />;
//   };
// }

// export default customStyled;

export const TEST = {};
