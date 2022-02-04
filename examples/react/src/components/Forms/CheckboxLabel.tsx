import {
  Component,
  MorfeoComponent,
  MorfeoComponentProps,
} from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const CheckboxLabel: React.FC<Props> = props => {
  return <MorfeoComponent componentName="CheckboxLabel" {...props} />;
};
