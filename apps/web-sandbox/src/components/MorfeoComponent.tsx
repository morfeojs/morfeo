import { Variant, useClassName, Component, component, useTheme, Style } from '@morfeo/react';
import React, { ReactNode, HTMLProps, useMemo } from 'react';


type Props<T extends Component> = {
  variant?: Variant<T>;
  componentName: T;
  children?: ReactNode;
  style?: Style;
} & Omit<HTMLProps<HTMLElement>, 'style'>

export function MorfeoComponent<T extends Component>({ componentName , variant, children, style, ...props }: Props<T>) {
  const componentObj = component(componentName, variant).get();
  const componentStyle = component(componentName, variant).getStyle();
  const theme = useTheme();
  
  const className = useClassName({ ...componentStyle, ...style });
  
  const render = useMemo(() => {
    if (componentObj.tag && theme) {
      return React.createElement(componentObj.tag, {
        ...componentObj.props,
        className,
        children,
        ...props
      })
    }
    
    return <></> 
    
  }, [children, className, componentObj.props, componentObj.tag, props, theme])

  return render
}