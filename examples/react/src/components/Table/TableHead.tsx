import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'TableHead'>, 'componentName'>;

export const TableHead: React.FC<Props> = props => (
  <MorfeoComponent componentName="TableHead" {...props} />
);
