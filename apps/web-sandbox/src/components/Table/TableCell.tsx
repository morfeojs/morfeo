import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const TableCell: React.FC<Props> = props => (
  <MorfeoComponent componentName={"TableCell" as any} {...props} />
);
