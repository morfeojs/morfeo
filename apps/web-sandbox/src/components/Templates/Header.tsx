import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Header'>, 'componentName'>;

export const Header: React.FC<Props> = props => (
  <MorfeoComponent componentName="Header" {...props} />
);
