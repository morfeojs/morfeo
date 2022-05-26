import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Checkbox'>, 'componentName'>;

export const Checkbox: React.FC<Props> = props => {
  return <MorfeoComponent componentName="Checkbox" {...props} />;
};
