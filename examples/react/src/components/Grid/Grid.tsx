import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Grid'>, 'componentName'>;

export const Grid: React.FC<Props> = props => (
  <MorfeoComponent componentName="Grid" {...props} />
);
