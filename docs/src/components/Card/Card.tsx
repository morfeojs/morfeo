import { morfeo } from 'src/morfeo';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

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

export function Card({ className, ...props }: CardProps) {
  return <div {...props} className={classes('container', className)} />;
}
