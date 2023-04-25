import { morfeo } from '@morfeo/css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const classes = morfeo.css({
  container: {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export const Main: React.FC<CardProps> = props => {
  return <div {...props} className={classes.container} />;
};
