import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'CheckboxContainer'>, 'componentName'>;

export const CheckboxContainer: React.FC<Props> = props => {
  return <MorfeoComponent componentName="CheckboxContainer" {...props} />;
};
