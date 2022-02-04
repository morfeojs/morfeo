import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const TableRow: React.FC<Props> = props => (
  <MorfeoComponent componentName={"TableRow" as any} {...props} />
);
