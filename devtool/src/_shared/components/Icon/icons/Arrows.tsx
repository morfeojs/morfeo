import React from 'react';
import { IconProps } from './props';

const Arrow: React.FC<IconProps> = props => {
  return (
    <svg
      width="75"
      height="75"
      viewBox="0 0 75 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.4829 37.1597L58.8359 37.1597"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        stroke-line-join="round"
      />
      <path
        d="M37.1592 15.4832L58.8357 37.1597L37.1592 58.8362"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        stroke-line-join="round"
      />
    </svg>
  );
};

export const RightArrow: React.FC<IconProps> = props => <Arrow {...props} />;

export const LeftArrow: React.FC<IconProps> = props => (
  <Arrow {...props} style={{ ...props.style, transform: 'rotate(180deg)' }} />
);

export const UpArrow: React.FC<IconProps> = props => (
  <Arrow {...props} style={{ ...props.style, transform: 'rotate(270deg)' }} />
);

export const DownArrow: React.FC<IconProps> = props => (
  <Arrow {...props} style={{ ...props.style, transform: 'rotate(90deg)' }} />
);
