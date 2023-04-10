'use client';

import { createUseComponent } from '@morfeo/css';
import {
  ButtonHTMLAttributes,
  CSSProperties,
  DetailedHTMLProps,
  useState,
} from 'react';
import { Montserrat } from 'next/font/google';
import { lightTheme } from '@morfeo/preset-default';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type StyleProps = {
  bg: any;
};

const montserrat = Montserrat({
  subsets: ['latin'],
});

const useButton = createUseComponent({
  componentName: 'Button',
  variant: 'primary',
  bg: (props: StyleProps) => props.bg,
});

const colors: CSSProperties['color'][] = [
  lightTheme.colors.primary,
  lightTheme.colors.secondary,
];

export const Button: React.FC<ButtonProps> = props => {
  const [colorIndex, setColorIndex] = useState<number>(0);

  const { className, style } = useButton({
    bg: colors[colorIndex],
    className: montserrat.className,
    style: montserrat.style,
  });

  function onClick() {
    setColorIndex(prev => (prev + 1) % colors.length);
  }

  return (
    <button {...props} className={className} style={style} onClick={onClick} />
  );
};
