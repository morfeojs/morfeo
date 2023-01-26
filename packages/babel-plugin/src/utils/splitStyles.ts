import { Component, component, Style } from '@morfeo/web';

function isStyle(value: any): value is Style {
  return typeof value === 'object';
}

export function splitStyles(object: Style): Style[] {
  const pairs = Object.entries(object);

  return pairs.reduce<Style[]>((acc, [key, value]) => {
    if (isStyle(value)) {
      const result = splitStyles(value);
      return [...acc, ...result.map(curr => ({ [key]: curr }))];
    }

    if (key === 'variant' || key === 'state') {
      return acc;
    }

    if (key === 'componentName') {
      const { variant, state } = object;
      const componentStyle = component(
        value as Component,
        variant,
        state,
      ).getStyle();

      return [...acc, ...splitStyles(componentStyle)];
    }

    return [...acc, { [key]: value }];
  }, []);
}
