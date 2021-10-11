import React from 'react';
import { IconProps } from './props';
import './styles.css';

export const Loading: React.FC<IconProps> = props => (
  <svg
    width="132"
    height="129"
    viewBox="0 0 132 129"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="loading-spinner"
    {...props}
  >
    <g filter="url(#filter0_d)">
      <path
        d="M125.999 58.1952C125.999 71.9831 121.45 85.3858 113.056 96.3245C104.663 107.263 92.8943 115.127 79.5762 118.695"
        stroke={props.stroke}
        stroke-width="3.5122"
      />
      <path
        d="M5.99904 61.122C5.99904 47.6481 10.4163 34.5508 18.5658 23.8612C26.7152 13.1716 38.1415 5.4873 51.0723 1.99999"
        stroke={props.stroke}
        stroke-width="3.5122"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="0.242188"
        y="0.304474"
        width="131.514"
        height="128.087"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
