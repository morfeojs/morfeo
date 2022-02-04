import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const Box: React.FC<Props> = props => (
  <MorfeoComponent componentName="Box" {...props} />
);
