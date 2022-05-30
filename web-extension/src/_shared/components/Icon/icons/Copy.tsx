import React from 'react';
import { IconProps } from './props';

export const Copy: React.FC<IconProps> = props => {
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
        d="M62.2735 27.8698H34.4037C30.9833 27.8698 28.2104 30.6426 28.2104 34.0631V61.9329C28.2104 65.3534 30.9833 68.1262 34.4037 68.1262H62.2735C65.694 68.1262 68.4668 65.3534 68.4668 61.9329V34.0631C68.4668 30.6426 65.694 27.8698 62.2735 27.8698Z"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8241 46.4497H12.7275C11.0849 46.4497 9.50962 45.7972 8.34815 44.6357C7.18668 43.4742 6.53418 41.8989 6.53418 40.2564V12.3866C6.53418 10.744 7.18668 9.16872 8.34815 8.00726C9.50962 6.84579 11.0849 6.19328 12.7275 6.19328H40.5973C42.2398 6.19328 43.8151 6.84579 44.9766 8.00726C46.1381 9.16872 46.7906 10.744 46.7906 12.3866V15.4832"
        stroke={props.stroke}
        strokeWidth="6.19329"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
