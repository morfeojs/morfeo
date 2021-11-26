import { Component } from "@morfeo/react";

import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const InputContainer: React.FC<Props> = props => {
  return <MorfeoComponent componentName={"InputContainer" as Component} {...props} />;
};