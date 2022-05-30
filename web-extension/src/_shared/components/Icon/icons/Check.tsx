import React from 'react';
import { IconProps } from './props';

export const Check: React.FC<IconProps> = props => (
  <svg
    width="17"
    height="13"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.5925 1.88879L5.61101 11.8703L1.07397 7.33324"
      stroke={props.stroke}
      strokeWidth="1.81481"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
