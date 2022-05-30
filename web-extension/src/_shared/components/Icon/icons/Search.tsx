import React from 'react';
import { IconProps } from './props';

export const Search: React.FC<IconProps> = props => (
  <svg
    width="68"
    height="68"
    viewBox="0 0 68 68"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.1667 53.8333C43.6851 53.8333 53.8333 43.6851 53.8333 31.1667C53.8333 18.6482 43.6851 8.5 31.1667 8.5C18.6482 8.5 8.5 18.6482 8.5 31.1667C8.5 43.6851 18.6482 53.8333 31.1667 53.8333Z"
      stroke={props.stroke}
      strokeWidth="5.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M59.5003 59.5L47.1753 47.175"
      stroke={props.stroke}
      strokeWidth="5.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
