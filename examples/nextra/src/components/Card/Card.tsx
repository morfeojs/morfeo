import { morfeo } from '@morfeo/css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import clsx from 'clsx';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const classes = morfeo.css({
  container: {
    position: 'relative',
    bg: 'raw:#111',
    corner: 'raw:14px',
    display: 'flex',
    transition: 'fast',
    '&::before': {
      content: "''",
      corner: 'raw:16px',
      position: 'absolute',
      top: 'raw:-2px',
      left: 'raw:-2px',
      gradient: 'accentToPrimary',
      height: 'raw:calc(100% + 4px)',
      width: 'raw:calc(100% + 4px)',
      zIndex: 'raw:-1',
      transition: 'fast',
      opacity: 'light',
    },
    '&:hover': {
      '&::before': {
        opacity: 'strong',
      },
    },
  },
});

export const Card: React.FC<CardProps> = props => {
  return (
    <div {...props} className={clsx(classes.container, props.className)} />
  );
};
