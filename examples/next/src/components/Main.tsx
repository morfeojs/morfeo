import { createUseStyle } from '@morfeo/css';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

type CardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const useMain = createUseStyle({
  display: 'flex',
  minHeight: '100vh',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Main: React.FC<CardProps> = props => {
  const { className, style } = useMain();
  return <div {...props} className={className} style={style} />;
};
