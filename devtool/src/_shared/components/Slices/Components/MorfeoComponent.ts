import React from 'react';
import { component, Component, getStyles } from '@morfeo/react';
import clsx from 'clsx';

type Props = {
  name: Component;
  variant?: string;
};

type TagName = keyof HTMLElementTagNameMap;

export const MorfeoComponent: React.FC<Props> = ({
  name,
  variant,
  children,
  ...props
}) => {
  const { tag = 'div', props: componentProps = {} } =
    component(name, variant).get() || {};
  const { classes } = getStyles({
    [name]: {
      componentName: name as Component,
      variant,
    },
  });
  const className = classes[name];

  return React.createElement(tag as TagName, {
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
