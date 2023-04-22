import { ReactNode, HTMLProps, createElement } from 'react';
import { Style, Variant, Component, component, State } from '@morfeo/web';
import { useClassName } from './useClassName';
import { ReactElement } from 'react';

export type MorfeoComponentProps<T extends Component> = {
  style?: Style;
  variant?: Variant<T>;
  state?: State<T>;
  children?: ReactNode;
  componentName: T;
} & Omit<HTMLProps<HTMLElement>, 'style'>;

export function MorfeoComponent<T extends Component>({
  style,
  variant,
  children,
  componentName,
  state,
  ...props
}: MorfeoComponentProps<T>): ReactElement {
  const {
    tag = 'div',
    props: componentProps,
    style: componentStyle,
  } = component(componentName, variant, state).get();

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
