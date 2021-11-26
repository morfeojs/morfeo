import { lightTheme } from "@morfeo/preset-default";
import { Component, ComponentConfig, morfeo, Spacing, Theme } from '@morfeo/react';

import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

const CheckboxLabelMorfeo: ComponentConfig = {
  tag: 'label',
  style: {
    componentName: 'Typography',
    variant: 'p',
    mb: 'none',
    position: 'relative',
    top: '-2px' as Spacing,
  },
  variants: {},
}

morfeo.setTheme('light', {
  ...lightTheme,
  components: { 
    ...lightTheme.components,
    CheckboxLabel: CheckboxLabelMorfeo,
  } as Theme['components']
} as Theme)

console.log(morfeo.getTheme('light'))

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const CheckboxLabel: React.FC<Props> = props => {
  return <MorfeoComponent componentName={"CheckboxLabel" as Component} {...props} />;
};