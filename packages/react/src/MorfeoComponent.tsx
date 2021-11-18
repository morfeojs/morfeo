import { ReactNode, HTMLProps, createElement } from 'react';
import { Style, Variant, Component, component } from '@morfeo/web';
import { useClassName } from './useClassName';

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

  const baseClassName = useClassName({ ...componentStyle, ...style });
  const className = props.className
    ? `${baseClassName} ${props.className}`
    : baseClassName;

  return createElement(
    tag,
    {
      ...componentProps,
      ...props,
      className,
    },
    children,
  );
}
