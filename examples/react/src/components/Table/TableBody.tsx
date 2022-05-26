import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'TableBody'>, 'componentName'>;

export const TableBody: React.FC<Props> = props => (
  <MorfeoComponent componentName="TableBody" {...props} />
);
