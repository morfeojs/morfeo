import React from 'react';
import { IconProps } from './props';
import './styles.css';

export const Loading: React.FC<IconProps> = props => (
  <svg
    width="124"
    height="121"
    viewBox="0 0 124 121"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="loading-spinner"
    {...props}
  >
    <path
      d="M121.999 58.1952C121.999 71.9831 117.45 85.3858 109.056 96.3245C100.663 107.263 88.8943 115.127 75.5762 118.695"
      stroke={props.stroke}
      strokeWidth="3.5122"
    />
    <path
      d="M1.99904 61.122C1.99904 47.6481 6.41631 34.5508 14.5658 23.8612C22.7152 13.1716 34.1415 5.4873 47.0723 1.99999"
      stroke={props.stroke}
      strokeWidth="3.5122"
    />
  </svg>
);
