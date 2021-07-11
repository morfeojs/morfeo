import {
  theme as themeHandler,
  component as componentHandler,
  parsers,
  Theme,
  ThemeKey,
  Component,
  Style,
} from '@morfeo/web';

function defaultParser<Key extends ThemeKey>(
  prefix: string,
  slice: Theme[Key],
) {
  const keys = Object.keys(slice || {}) as (keyof Theme[Key])[];
  let css = '';
  const object: any = {};
  keys.forEach(alias => {
    const property = `--${prefix}-${alias}`;
    const value = slice[alias];
    object[alias] = `var(${property})`;
    css += `\n\t${property}: ${value};`;
  });

  return { css, object };
}

function toKebabCase(string: string) {
  const upper =
    /(?<!\p{Uppercase_Letter})\p{Uppercase_Letter}|\p{Uppercase_Letter}(?!\p{Uppercase_Letter})/gu;
  return string.replace(upper, '-$&').replace(/^-/, '').toLowerCase();
}

function getStyle(style: any): any {
  if (typeof style === 'object') {
    const keys = Object.keys(style);

    return ''; // keys.reduce((acc, curr) => acc + getStyle(style[curr]), '');
  }

  return style;
}

function parseStyle(className: string, style: any) {
  const keys = Object.keys(style);
  let css = `\n.${className} {`;
  css += keys.reduce((acc, curr) => {
    return acc + `\n\t${toKebabCase(curr)}: ${getStyle(style[curr])};`;
  }, '');
  css += `\n}`;

  return css;
}

export function parser(theme: Theme, name: string) {
  const {
    components,
    colors,
    spacings,
    sizes,
    borderStyles,
    borderWidths,
    borders,
    breakpoints,
    fontSizes,
    fontWeights,
    fonts,
    gradients,
    letterSpacings,
    lineHeights,
    mediaQueries,
    opacities,
    radii,
    shadows,
    transitions,
    zIndices,
  } = theme;

  let css = `:root, html[data-morfeo-theme=${name}] {`;
  const object: any = { components };
  const defaultSlices = [
    { name: 'colors', prefix: 'color', value: colors },
    { name: 'spacings', prefix: 'spacing', value: spacings },
    { name: 'sizes', prefix: 'size', value: sizes },
    { name: 'borderStyles', prefix: 'border-style', value: borderStyles },
    { name: 'borderWidths', prefix: 'border-width', value: borderWidths },
    { name: 'borders', prefix: 'border', value: borders },
    { name: 'breakpoints', prefix: 'breakpoint', value: breakpoints },
    { name: 'fontSizes', prefix: 'font-size', value: fontSizes },
    { name: 'fontWeights', prefix: 'font-weight', value: fontWeights },
    { name: 'fonts', prefix: 'font', value: fonts },
    { name: 'letterSpacings', prefix: 'letter-spacing', value: letterSpacings },
    { name: 'lineHeights', prefix: 'line-height', value: lineHeights },
    { name: 'opacities', prefix: 'opacity', value: opacities },
    { name: 'radii', prefix: 'radius', value: radii },
    // { name: 'shadows', prefix: 'shadow', value: shadows },
    { name: 'transitions', prefix: 'transition', value: transitions },
    { name: 'zIndices', prefix: 'z-index', value: zIndices },
  ];

  defaultSlices.forEach(({ name, prefix, value }) => {
    const { css: sliceCss, object: sliceObject } = defaultParser(prefix, value);
    css += sliceCss;
    object[name] = sliceObject;
  });

  css += '\n}';

  themeHandler.set(object);
  const componentKeys = Object.keys(components) as Component[];
  componentKeys.forEach(componentName => {
    const { style } = componentHandler(componentName).get();
    const parsedStyle = parsers.resolve(style);
    const variants = componentHandler(componentName).getVariants();
    const variantKeys = Object.keys(variants || {});
    css += parseStyle(`morfeo-${componentName}`, parsedStyle);
    variantKeys.forEach(variant => {
      const { style: variantStyle = {} } = componentHandler(
        componentName,
        variant as any,
      ).get();
      const parsedVariantStyle = parsers.resolve(variantStyle);
      css += parseStyle(
        `morfeo-${componentName}-${variant}`,
        parsedVariantStyle,
      );
    });
  });

  return css;
}
