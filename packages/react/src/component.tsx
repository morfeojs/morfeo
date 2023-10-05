import type { ReactHTML } from 'react';
import React from 'react';
import type {
  Theme,
  Morfeo,
  Component,
  MorfeoStyle,
  ComponentState,
  ComponentVariant,
} from '@morfeo/web';
import { combine, expandStyles } from '@morfeo/web';
import { escapeString, generateClassName } from '@morfeo/utils';

type NeededProps = {
  className?: string;
  style?: any;
};

type ReducedStyle<T extends Partial<Theme>> = Omit<
  MorfeoStyle<T>,
  'componentName' | 'variant' | 'state'
>;

type ValueOrFunction<T, P> =
  | T
  | ((props: P) => T)
  | {
      [K in keyof T]: ValueOrFunction<T[K], P>;
    };

type ComponentStyle<
  T extends Partial<Theme>,
  C extends keyof T['components'],
  P,
> = {
  [K in keyof ReducedStyle<T>]: ValueOrFunction<ReducedStyle<T>[K], P>;
} & (C extends Component
  ? {
      state?: ValueOrFunction<ComponentState<T, C>, P>;
      variant?: ValueOrFunction<ComponentVariant<T, C>, P>;
    }
  : {
      componentName?: MorfeoStyle<T>['componentName'];
      state?: ValueOrFunction<ComponentState<T, C>, P>;
      variant?: ValueOrFunction<ComponentVariant<T, C>, P>;
    });

function mutateObject<T>(object: T, value: string, path: string[]) {
  if (path.length === 1) {
    object[path[0]] = value;

    return object;
  }

  return mutateObject(object[path[0]] || {}, value, path.slice(1));
}

export function createMorfeoComponent<T extends Partial<Theme>>(
  morfeo: Morfeo<T>,
) {
  function splitStyleAndInlineStyle(
    params: ComponentStyle<any, any, any>,
    props: any,
    prefix: string[] = [],
  ) {
    return Object.keys(params).reduce(
      (acc, curr) => {
        const value = params[curr];

        if (
          morfeo.parsers.isThemeableProperty(curr) &&
          typeof value === 'function'
        ) {
          return {
            ...acc,
            style: {
              ...acc.style,
              [curr]: value(props),
            },
          };
        }

        if (typeof value === 'function') {
          const resolvedStyle = morfeo.parsers.resolve({
            [curr]: value(props),
          });

          const variable = `--${escapeString(
            [...prefix, curr].filter(Boolean).join('.'),
          )}`;

          return {
            ...acc,
            style: mutateObject({ ...acc.style }, `var(${variable})`, [
              ...prefix,
              curr,
            ]),
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
   * ```tsx
   * import { morfeo } from '@morfeo/react';
   *
   * const Button = morfeo.component('Button', {
   *   variant: props => props.variant,
   *   py: 'm',
   *   '&:hover: {
   *      shadow: 'medium'
   *   }
   * });
   * ```
   * It is also possible to pass an existing component or a valid html tag:
   *
   * ```
   * import { morfeo } from '@morfeo/react';
   * import { RouterLink } from 'routing-library';
   *
   * const Button = morfeo.component('button', {
   *   componentName: 'Button',
   *   variant: props => props.variant,
   * });
   *
   * const Link = morfeo.component(RouterLink, {
   *   componentName: 'Link',
   * });
   * ```
   */
  return function component<
    P extends NeededProps & {},
    C extends keyof T['components'] = keyof T['components'],
  >(
    componentName: C | keyof ReactHTML | React.FC<P>,
    styleWithFunctions: ComponentStyle<T, C, P>,
  ) {
    const MorfeoComponent = React.forwardRef<HTMLElement, P>(
      function (props, ref) {
        const isWrappedComponent = typeof componentName === 'function';
        const { variant, state, ...rest } = props as any;

        const { style, inlineStyle } = splitStyleAndInlineStyle(
          styleWithFunctions as any,
          props,
        );

        const componentOptions = isWrappedComponent
          ? undefined
          : morfeo.theme.component(
              componentName as any,
              style.variant,
              style.state,
            );

        const ComponentTag = isWrappedComponent
          ? componentName
          : componentOptions?.getTag() || componentName;

        const classObject = expandStyles<T>(
          morfeo as any,
          { componentName, ...style } as any,
          {
            getClassName: style =>
              generateClassName(style, morfeo.theme.getMetadata()),
          },
        );

        const componentProps = {
          ref,
          ...componentOptions?.getProps(),
          ...rest,
          className: combine(classObject, props.className),
          style: {
            ...props.style,
            ...inlineStyle,
          },
        };

        if (isWrappedComponent) {
          return <ComponentTag {...componentProps} />;
        }

        return React.createElement(ComponentTag, componentProps);
      },
    );

    MorfeoComponent.displayName =
      typeof componentName === 'function'
        ? componentName.displayName
        : (componentName as string);

    return MorfeoComponent;
  };
}
