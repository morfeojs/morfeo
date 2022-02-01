import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const TableBody: React.FC<Props> = props => (
  <MorfeoComponent componentName={"TableBody" as any} {...props} />
);
