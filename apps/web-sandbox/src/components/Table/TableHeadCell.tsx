import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const TableHeadCell: React.FC<Props> = props => (
  <MorfeoComponent componentName={"TableHeadCell" as any} {...props} />
);
