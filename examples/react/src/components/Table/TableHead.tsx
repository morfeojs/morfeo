import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const TableHead: React.FC<Props> = props => (
  <MorfeoComponent componentName={"TableHead" as any} {...props} />
);
