import React from 'react';
import { Opacity, useThemeValue } from '@morfeo/react';

type Props = {
  opacity: Opacity;
};

export const OpacityCard: React.FC<Props> = ({ opacity }) => {
  const value = useThemeValue('opacities', opacity);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="96"
      height="96"
      fill="none"
      viewBox="0 0 96 96"
    >
      <rect
        width="66"
        height="66"
        x="30"
        fill="var(--colors-primary-light)"
        rx="5"
      ></rect>
      <rect
        width="66"
        height="66"
        y="30"
        fill="var(--colors-primary)"
        opacity={value}
        rx="5"
      ></rect>
    </svg>
  );
};
