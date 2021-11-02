import React from 'react';
import { component, Component, getStyles } from '@morfeo/react';
import clsx from 'clsx';

type Props = {
  name: Component;
  variant?: string;
  applyDefaultStyle?: boolean;
};

type TagName = keyof HTMLElementTagNameMap;

export const MorfeoComponent: React.FC<Props> = ({
  name,
  variant,
  children,
  applyDefaultStyle,
  ...props
}) => {
  const {
    tag = 'div',
    props: componentProps = {},
    meta,
  } = component(name, variant).get() || {};
  const { devtoolConfig } = meta || {};
  const { classes } = getStyles({
    [name]: {
      ...(applyDefaultStyle && devtoolConfig?.style),
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
    children: devtoolConfig?.label || children,
  });
};
