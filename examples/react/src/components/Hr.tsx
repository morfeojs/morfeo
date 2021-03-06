import { MorfeoComponent, MorfeoComponentProps } from '@morfeo/react';

type Props = Omit<MorfeoComponentProps<'Hr'>, 'componentName'>;

export const Hr: React.FC<Props> = props => (
  <MorfeoComponent componentName="Hr" {...props} />
);
