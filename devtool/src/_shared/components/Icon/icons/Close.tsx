import React from 'react';
import { IconProps } from './props';

export const Close: React.FC<IconProps> = props => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M56.4205 18.5799L19.2607 55.7396"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.2607 18.5799L56.4205 55.7396"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
