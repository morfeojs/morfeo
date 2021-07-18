import { Style } from '@morfeo/react';
import styled, { MorfeoStyledComponent } from '@morfeo/styled-components-web';

export const Button = styled.button({
  componentName: 'Button',
}) as MorfeoStyledComponent<'Button', Style>;
