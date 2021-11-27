import { lightTheme } from "@morfeo/preset-default";
import { Component, morfeo } from "@morfeo/react";
import { ComponentConfig } from '../../../../../packages/spec/src/types/components';

import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

morfeo.setTheme('light', {
  ...lightTheme,
  components: {
    ...lightTheme.components,
    Checkbox: {
      tag: 'input',
      props: {
        type: 'checkbox',
      },
      style: {
        size: 'xs',
        mr: 'xs'
      },
      variants: {},
    } as ComponentConfig
  } as any
})

console.log(morfeo.getTheme('light'))

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const Checkbox: React.FC<Props> = props => {
  return <MorfeoComponent componentName={"Checkbox" as Component} {...props} />;
};