import React from 'react';
import { Pressable } from 'react-native';
import { Style, ResolvedStyle } from '@morfeo/native';
import { useStyle } from '@morfeo/hooks';
import { withTypography } from './Typography';

type Props = Style & {
  style?: ResolvedStyle;
  textStyle?: Style;
};

export const Button: React.FC<Props> = ({
  children,
  textStyle = {},
  color,
  style,
  ...props
}) => {
  const defaultStyle = useStyle(props);

  return (
    <Pressable style={[style, defaultStyle]}>
      {withTypography(children, { ...textStyle, color })}
    </Pressable>
  );
};

Button.defaultProps = {
  componentName: 'Button',
};
