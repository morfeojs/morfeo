import React from 'react';
import { morfeo, component, Component } from '@morfeo/react';

type Params = {
  name: Component;
  variant?: string;
  props: any;
  children: React.ReactNode[];
};

export function createMorfeoComponent({
  name,
  variant,
  props: componentProps,
  children = [],
}: Params) {
  const { tag, style, props = {} } = component(name, variant).get();

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
