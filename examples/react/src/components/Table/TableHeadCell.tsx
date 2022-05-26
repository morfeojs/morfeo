import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'TableHeadCell'>, 'componentName'>;

export const TableHeadCell: React.FC<Props> = props => (
  <MorfeoComponent componentName="TableHeadCell" {...props} />
);
