import { createUseComponent } from '@morfeo/css';
import { CSSProperties, DetailedHTMLProps, HTMLAttributes } from 'react';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {
  direction?: 'left' | 'right';
  bg?: CSSProperties['color'];
};

const useCard = createUseComponent({
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

export const Card: React.FC<CardProps> = ({ direction, ...props }) => {
  const { className, style } = useCard();

  return (
    <div
      {...props}
      data-direction={direction}
      className={className}
      style={style}
    />
  );
};
