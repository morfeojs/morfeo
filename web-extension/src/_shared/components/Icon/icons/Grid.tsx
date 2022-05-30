import React from 'react';
import { IconProps } from './props';

export const Grid: React.FC<IconProps> = props => (
  <svg
    width="74"
    height="74"
    viewBox="0 0 74 74"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.25 9.25H30.8333V30.8333H9.25V9.25Z"
      stroke={props.stroke}
      strokeWidth="5.40769"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.1665 9.25H64.7498V30.8333H43.1665V9.25Z"
      stroke={props.stroke}
      strokeWidth="5.40769"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M43.1665 43.1667H64.7498V64.75H43.1665V43.1667Z"
      stroke={props.stroke}
      strokeWidth="5.40769"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.25 43.1667H30.8333V64.75H9.25V43.1667Z"
      stroke={props.stroke}
      strokeWidth="5.40769"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
