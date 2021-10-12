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
  size: sizeProp = 'l',
  ...props
}) => {
  const strokeColor = `var(--colors-${paramCase(color)})`;
  const size = `var(--spacings-${paramCase(sizeProp)})`;

  if (!icons[name]) {
    return null;
  }

  return icons[name]({
    ...DEFAULT_ICON_PROPS,
    ...props,
    stroke: strokeColor,
    style: {
      ...props.style,
      height: size,
      width: size,
    },
  });
};
