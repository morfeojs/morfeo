import React from 'react';
import { component, Component, useClassName } from '@morfeo/react';
import clsx from 'clsx';

type Props = {
  name: Component;
  variant?: string;
};

export const MorfeoComponent: React.FC<Props> = ({
  name,
  variant,
  children,
  ...props
}) => {
  const { tag, props: componentProps = {} } = component(name, variant).get();
  const className = useClassName({ componentName: name, variant });

  return React.createElement((tag || 'div') as any, {
    ...componentProps,
    ...props,
    className: clsx(
      className,
      (props as any).className,
      (componentProps as any).className,
    ),
    style: {
      ...(props as any).style,
      ...(componentProps as any).style,
    },
    children,
  });
};
