'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from 'react';
import { Montserrat } from 'next/font/google';
import { useButton } from './Button.morfeo';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const montserrat = Montserrat({
  subsets: ['latin'],
});

const variants = ['primary', 'secondary'] as const;

export const Button: React.FC<ButtonProps> = props => {
  const [variantIndex, setVariantIndex] = useState<number>(0);

  const { className, style } = useButton({
    variant: variants[variantIndex],
    className: montserrat.className,
    style: montserrat.style,
  });

  function onClick() {
    setVariantIndex(prev => (prev + 1) % variants.length);
  }

  return (
    <button {...props} className={className} style={style} onClick={onClick} />
  );
};
