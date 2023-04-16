import { createUseStyle } from '@morfeo/css';
import NextLink from 'next/link';
import { ComponentProps } from 'react';

type LinkProps = ComponentProps<typeof NextLink>;

const useLink = createUseStyle({
  componentName: 'Typography',
  variant: 'link',
});

export const Link: React.FC<LinkProps> = props => {
  const { className, style } = useLink();
  return <NextLink {...props} className={className} style={style} />;
};
