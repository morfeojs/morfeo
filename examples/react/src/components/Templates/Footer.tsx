import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Footer'>, 'componentName'>;

export const Footer: React.FC<Props> = props => (
  <MorfeoComponent componentName="Footer" {...props} />
);
