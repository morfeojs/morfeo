import React from 'react';
import { morfeo, component, Component } from '@morfeo/react';

function createMorfeoComponent(
  name: Component,
  componentProps: any = {},
  children: React.ReactNode[] = [],
) {
  const { tag, style, props = {} } = component(name).get();

  return React.createElement((tag || 'div') as any, {
    ...props,
    ...componentProps,
    style: {
      ...(props as any).style,
      ...componentProps.style,
      ...morfeo.resolve(style),
    },
    children,
  });
}

type Props = {
  name: Component;
};

export const Detail: React.FC<Props> = ({ name, children, ...props }) => {
  return createMorfeoComponent(name, props, [children]);
};
