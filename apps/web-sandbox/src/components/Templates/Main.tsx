import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Main'>, 'componentName'>;

export const Main: React.FC<Props> = props => (
  <MorfeoComponent componentName="Main" {...props} />
);
