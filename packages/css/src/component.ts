import type { FC, ReactHTML } from 'react';
import React from 'react';
import type { Component } from '@morfeo/web';
import { combine, component as morfeoComponent, parsers } from '@morfeo/web';
import { escapeString, generateClassName } from '@morfeo/utils';
import type { ComponentStyle } from './types';
import { expandStyles } from './expandStyles';

type MorfeoComponent<P extends object> = FC<
  P & {
    className?: string;
    style?: any;
  }
>;

function mutateObject<T>(object: T, value: string, path: string[]) {
  if (path.length === 1) {
    object[path[0]] = value;
    return object;
  }

  return mutateObject(object[path[0]], value, path.slice(1, path.length));
}

function splitStyleAndInlineStyle(
  params: ComponentStyle<any, any>,
  props: any,
  prefix: string[] = [],
) {
  return Object.keys(params).reduce(
    (acc, curr) => {
      const value = params[curr];

      if (parsers.isThemeableProperty(curr) && typeof value === 'function') {
        return {
          ...acc,
          style: {
            ...acc.style,
            [curr]: value(props),
          },
        };
      }

      if (typeof value === 'function') {
        const resolvedStyle = parsers.resolve({ [curr]: value(props) });
        const variable = `--${escapeString(
          [...prefix, curr].filter(Boolean).join('.'),
        )}`;

        return {
          ...acc,
          style: mutateObject(acc.style, `var(${variable})`, [...prefix, curr]),
          inlineStyle: {
            ...acc.inlineStyle,
            [variable]: resolvedStyle[curr],
          },
        };
      }

      if (value && typeof value === 'object') {
        const result = splitStyleAndInlineStyle(value as any, props, [
          ...prefix,
          curr,
        ]);
        return {
          ...acc,
          style: {
            ...acc.style,
            [curr]: result.style,
          },
          inlineStyle: {
            ...acc.inlineStyle,
            ...result.inlineStyle,
          },
        };
      }

      return { ...acc, style: { ...acc.style, [curr]: value } };
    },
    { style: {}, inlineStyle: {} },
  );
}

/**
 *
 * It creates a React component styled with the style passed as the second argument,
 * the first argument could be a component name or a valid html tag.
 *
 * @example
 *
 * ```tsx
 * import { morfeo } from '@morfeo/css';
 *
 * const Button = morfeo.component('Button', {
 *   variant: props => props.variant,
 *   py: 'm',
 *   '&:hover: {
 *      shadow: 'medium'
 *   }
 * });
 * ```
 */
export function component<P extends object, C extends Component = Component>(
  componentName: C | keyof ReactHTML,
  styleWithFunctions: ComponentStyle<C, P>,
): MorfeoComponent<P> {
  return function (props) {
    const { style, inlineStyle } = splitStyleAndInlineStyle(
      styleWithFunctions,
      props,
    );
    const componentOptions = morfeoComponent(
      componentName as any,
      style.variant,
      style.state,
    );
    const ComponentTag = componentOptions.getTag() || componentName;

    const classObject = expandStyles({ componentName, ...style } as any, {
      getClassName: generateClassName,
    });

    return React.createElement(ComponentTag, {
      ...componentOptions.getProps(),
      ...props,
      className: combine(classObject, props.className),
      style: {
        ...props.style,
        ...inlineStyle,
      },
    });
  };
}
