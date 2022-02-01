import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Box'>, 'componentName'>;

export const Table: React.FC<Props> = props => (
  <MorfeoComponent componentName={"Table" as any} {...props} />
);
