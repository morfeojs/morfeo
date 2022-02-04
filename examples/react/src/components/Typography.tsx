import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Typography'>, 'componentName'>;

export const Typography: React.FC<Props> = props => (
  <MorfeoComponent componentName="Typography" {...props} />
);
