import React from 'react';
import { IconProps } from './props';

export const Info: React.FC<IconProps> = props => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M37.171 68.1262C54.2733 68.1262 68.1375 54.262 68.1375 37.1597C68.1375 20.0574 54.2733 6.19328 37.171 6.19328C20.0687 6.19328 6.20459 20.0574 6.20459 37.1597C6.20459 54.262 20.0687 68.1262 37.171 68.1262Z"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.1709 49.5463V37.1597"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M37.1709 24.7732H37.2019"
      stroke={props.stroke}
      strokeWidth="6.19329"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
