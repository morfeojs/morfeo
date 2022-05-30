import React, { PropsWithChildren } from 'react';
import { component, Component, getStyles } from '@morfeo/react';
import clsx from 'clsx';

const SELF_CLOSING_TAGS = [
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
];

type Props = PropsWithChildren<{
  name: Component;
  variant?: string;
  applyDefaultStyle?: boolean;
}>;

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

  return React.createElement(
    tag as TagName,
    {
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
    },
    SELF_CLOSING_TAGS.includes(tag)
      ? undefined
      : devtoolConfig?.label || children,
  );
};
