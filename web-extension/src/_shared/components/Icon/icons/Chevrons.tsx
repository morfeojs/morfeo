import React from 'react';
import { IconProps } from './props';

export const RightChevron: React.FC<IconProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      fill="none"
      viewBox="0 0 50 75"
      {...props}
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.193"
        d="M28.206 55.74l18.58-18.58-18.58-18.58"
      ></path>
    </svg>
  );
};

export const LeftChevron: React.FC<IconProps> = props => {
  return (
    <RightChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(180deg)', transformOrigin: 'center center' }}
    />
  );
};

export const UpChevron: React.FC<IconProps> = props => {
  return (
    <RightChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(270deg)', transformOrigin: 'center center' }}
    />
  );
};

export const DownChevron: React.FC<IconProps> = props => {
  return (
    <RightChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(90deg)', transformOrigin: 'center center' }}
    />
  );
};
