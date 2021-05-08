import React from 'react';
import { Style, ResolvedStyle } from '@morfeo/native';
import { withTypography } from './Typography';
import { Pressable } from 'react-native';
import { useStyle } from '@morfeo/hooks';

type Props = Style & {
  style?: ResolvedStyle;
  textStyle?: Style;
};

export const Button: React.FC<Props> = ({
  children,
  textStyle = {},
  color,
  ...props
}) => {
  const style = useStyle(props);
  return (
    <Pressable style={style}>
      {withTypography(children, { ...textStyle, color })}
    </Pressable>
  );
};

Button.defaultProps = {
  componentName: 'Button',
};
