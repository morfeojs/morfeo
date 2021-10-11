import { lightTheme } from '@morfeo/preset-default';
import { Color, Size } from '@morfeo/react';
import { paramCase } from 'change-case';
import React from 'react';
import icons, { IconName } from './icons';
import { DEFAULT_ICON_PROPS } from './icons/props';

type Props = React.SVGProps<SVGSVGElement> & {
  name: IconName;
  color?: Color;
  size?: Size;
};

export const Icon: React.FC<Props> = ({
  name,
  stroke,
  color = 'primary',
  size = 'l',
  ...props
}) => {
  const strokeColor = `var(--colors-${paramCase(color)})`;
  const height = lightTheme.sizes[size];

  if (!icons[name]) {
    return null;
  }

  return icons[name]({
    ...DEFAULT_ICON_PROPS,
    height: height,
    width: height,
    ...props,
    stroke: strokeColor,
  });
};
