import { lightTheme } from "@morfeo/preset-default";
import { Component, morfeo } from "@morfeo/react";
import { ComponentConfig } from '../../../../../packages/spec/src/types/components';

import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

morfeo.setTheme('light', {
  ...lightTheme,
  components: {
    ...lightTheme.components,
    CheckboxContainer: {
      tag: 'div',
      style: {
        pb: 'l', 
        alignItems: 'flex-start'
      },
      variants: {},
    } as ComponentConfig
  } as any
})

console.log(morfeo.getTheme('light'))

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const CheckboxContainer: React.FC<Props> = props => {
  return <MorfeoComponent componentName={"CheckboxContainer" as Component} {...props} />;
};