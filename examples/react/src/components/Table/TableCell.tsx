import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'TableCell'>, 'componentName'>;

export const TableCell: React.FC<Props> = props => (
  <MorfeoComponent componentName="TableCell" {...props} />
);
