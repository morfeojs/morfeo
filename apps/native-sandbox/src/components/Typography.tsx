import { parsers, Style } from '@morfeo/native';
import React from 'react';
import { CSSObject } from 'styled-components';
import styled from 'styled-components/native';

const Container = styled.Text<Style>(({ theme: _, ...props }) => {
  return parsers.resolve(props) as CSSObject;
});

export const Typography: React.FC<Style> = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export function withTypography(
  element: string | React.ReactNode,
  props: React.ComponentProps<typeof Typography>,
) {
  if (typeof element === 'string') {
    return <Typography {...props}>{element}</Typography>;
  }

  return element;
}

Typography.defaultProps = {
  componentName: 'Typography',
};
