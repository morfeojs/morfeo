import { createUseComponent } from '@morfeo/css';
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  direction?: 'left' | 'right';
  bg?: CSSProperties['color'];
};

const getCardProps = createUseComponent({
  componentName: 'Card',
  p: 'm',
  transition: 'fast',
  shadow: 'none',
  '&:hover': {
    p: 'xl',
    corner: '2xl',
    shadow: 'light',
  },
  '&[data-direction="right"]:hover': {
    transform: 'rotate(-3deg)',
  },
  '&[data-direction="left"]:hover': {
    transform: 'rotate(3deg)',
  },
});

const { className, style } = getCardProps();

export const Card: React.FC<CardProps> = ({ direction, ...props }) => {
  return (
    <div
      {...props}
      data-direction={direction}
      className={className}
      style={style}
    />
  );
};
