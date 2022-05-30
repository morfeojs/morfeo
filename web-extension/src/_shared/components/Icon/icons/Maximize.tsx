import React from 'react';
import { IconProps } from './props';

export const Maximize: React.FC<IconProps> = props => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M46.4551 9.28993H65.0349V27.8698"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.8753 65.0295H9.29541V46.4497"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M65.0349 9.28993L43.3584 30.9664"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.29541 65.0295L30.9719 43.353"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
