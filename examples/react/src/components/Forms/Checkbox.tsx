import {
  Component,
  MorfeoComponent,
  MorfeoComponentProps,
} from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<Component>, 'componentName'>;

export const Checkbox: React.FC<Props> = props => {
  return <MorfeoComponent componentName="Checkbox" {...props} />;
};
