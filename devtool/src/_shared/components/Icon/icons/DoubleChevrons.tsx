import React from 'react';
import { IconProps } from './props';

export const RightDoubleChevron: React.FC<IconProps> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="75"
      height="75"
      fill="none"
      viewBox="0 0 75 75"
      {...props}
    >
      <path
        stroke={props.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6.193"
        d="M40.926 21.677L56.41 37.16 40.926 52.643M19.25 21.677L34.733 37.16 19.25 52.643"
      ></path>
    </svg>
  );
};

export const LeftDoubleChevron: React.FC<IconProps> = props => {
  return (
    <RightDoubleChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(180deg)' }}
    />
  );
};

export const UpDoubleChevron: React.FC<IconProps> = props => {
  return (
    <RightDoubleChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(270deg)' }}
    />
  );
};

export const DownDoubleChevron: React.FC<IconProps> = props => {
  return (
    <RightDoubleChevron
      {...props}
      style={{ ...props.style, transform: 'rotate(90deg)' }}
    />
  );
};
