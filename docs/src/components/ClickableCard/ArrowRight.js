import React from 'react';
const ArrowRight = ({ size = 24, className, onClick }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    onClick={onClick}
  >
    <path d="M5 12h13M12 5l7 7-7 7" />
  </svg>
);
export default ArrowRight;
