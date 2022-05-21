import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'TableRow'>, 'componentName'>;

export const TableRow: React.FC<Props> = props => (
  <MorfeoComponent componentName="TableRow" {...props} />
);
