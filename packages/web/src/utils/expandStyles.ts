import { deepMerge, isDefaultObject } from '@morfeo/utils';
import type { Morfeo, MorfeoStyle, Theme, ThemeHandler } from '@morfeo/core';

type Callback = (value: MorfeoStyle<Theme>) => MorfeoStyle<Theme>;

function noop(value: MorfeoStyle<Theme>) {
  return value;
}

function pipe(...callbacks: Callback[]) {
  return callbacks.reduce((acc, curr) => {
    return (...args) => acc(curr(...args));
  }, noop);
}

type ExpandStyleOptions = {
  getClassName: (style: MorfeoStyle<Theme>) => string;
};

export type ExpandedStyle = {
  [key: string]: string | ExpandedStyle;
};

export function expandStyles<T extends Partial<Theme> = Partial<Theme>>(
  instance: Morfeo<T>,
  { componentName, variant, state, ...rest }: MorfeoStyle<Theme>,
  options: ExpandStyleOptions,
): ExpandedStyle {
  function traverse(style: MorfeoStyle<Theme>, getContext: Callback = noop) {
    function getClassName(s: MorfeoStyle<Theme>) {
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
              default: getClassName({
                [curr]: defaultValue,
              } as MorfeoStyle<Theme>),
              ...traverse(
                restStyle,
                pipe(
                  getContext,
                  (value: MorfeoStyle<Theme>) =>
                    ({ [curr]: value }) as MorfeoStyle<Theme>,
                ),
              ),
            },
          };
        }

        return {
          ...acc,
          [curr]: traverse(
            currentStyle,
            pipe(getContext, (value: MorfeoStyle<Theme>) => ({
              [curr]: value,
            })),
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
        ? (instance.theme
            // @ts-ignore
            .component(componentName, variant, state)
            .getStyle() as any)
        : {},
      rest,
    ),
  );
}
