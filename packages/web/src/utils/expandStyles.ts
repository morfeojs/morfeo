import { deepMerge, isDefaultObject } from '@morfeo/utils';
import { Style, morfeo } from '@morfeo/core';

type Callback = (value: Style) => Style;

function noop(value: Style) {
  return value;
}

function pipe(...callbacks: Callback[]) {
  return callbacks.reduce((acc, curr) => {
    return (...args) => acc(curr(...args));
  }, noop);
}

type ExpandStyleOptions = {
  getClassName: (style: Style) => string;
};

export type ExpandedStyle = {
  [key: string]: string | ExpandedStyle;
};

export function expandStyles(
  { componentName, variant, state, ...rest }: Style,
  options: ExpandStyleOptions,
): ExpandedStyle {
  function traverse(style: Style, getContext: Callback = noop) {
    function getClassName(s: Style) {
      return options.getClassName(getContext(s));
    }

    const keys = Object.keys(style);

    return keys.reduce((acc, curr) => {
      const currentStyle = style[curr];

      if (typeof currentStyle === 'object') {
        if (isDefaultObject(currentStyle)) {
          const { default: defaultValue, ...restStyle } = currentStyle;
          return {
            ...acc,
            [curr]: {
              default: getClassName({ [curr]: defaultValue } as Style),
              ...traverse(
                restStyle,
                pipe(
                  getContext,
                  (value: Style) => ({ [curr]: value }) as Style,
                ),
              ),
            },
          };
        }

        return {
          ...acc,
          [curr]: traverse(
            currentStyle,
            pipe(getContext, (value: Style) => ({ [curr]: value })),
          ),
        };
      }

      if (!currentStyle) {
        return acc;
      }

      const currClassName = getClassName({ [curr]: style[curr] });

      return { ...acc, [curr]: currClassName };
    }, {});
  }

  return traverse(
    deepMerge(
      componentName
        ? (morfeo.theme
            .component(componentName as any, variant, state)
            .getStyle() as any)
        : {},
      rest,
    ),
  );
}
