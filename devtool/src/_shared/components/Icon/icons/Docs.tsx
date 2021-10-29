import React from 'react';
import { IconProps } from './props';

export const Docs: React.FC<IconProps> = props => (
  <svg
    width="57"
    height="57"
    viewBox="0 0 57 57"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.5 46.3125C9.5 44.7378 10.1256 43.2276 11.2391 42.1141C12.3526 41.0006 13.8628 40.375 15.4375 40.375H47.5"
      stroke={props.stroke}
      strokeWidth="4.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4375 4.75H47.5V52.25H15.4375C13.8628 52.25 12.3526 51.6244 11.2391 50.5109C10.1256 49.3974 9.5 47.8872 9.5 46.3125V10.6875C9.5 9.11278 10.1256 7.60255 11.2391 6.48905C12.3526 5.37556 13.8628 4.75 15.4375 4.75V4.75Z"
      stroke={props.stroke}
      strokeWidth="4.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
