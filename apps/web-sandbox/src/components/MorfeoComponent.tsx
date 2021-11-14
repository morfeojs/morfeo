import {
  Style,
  Variant,
  useTheme,
  Component,
  component,
  useClassName,
} from '@morfeo/react';
import React, { ReactNode, HTMLProps, useMemo } from 'react';

export type MorfeoComponentProps<T extends Component> = {
  style?: Style;
  variant?: Variant<T>;
  children?: ReactNode;
  componentName: T;
} & Omit<HTMLProps<HTMLElement>, 'style'>;

export function MorfeoComponent<T extends Component>({
  style,
  variant,
  children,
  componentName,
  ...props
}: MorfeoComponentProps<T>) {
  const {
    tag = 'div',
    props: componentProps,
    style: componentStyle,
  } = component(componentName, variant).get();

  const theme = useTheme();

  const className = useClassName({ ...componentStyle, ...style });

  const render = useMemo(() => {
    if (tag && theme) {
      return React.createElement(
        tag,
        {
          ...componentProps,
          ...props,
          className: props.className
            ? [className, props.className].join(' ')
            : className,
        },
        children,
      );
    }

    return <></>;
  }, [children, className, componentProps, props, tag, theme]);

  return render;
}
