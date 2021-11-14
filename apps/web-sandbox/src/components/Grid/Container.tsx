import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Container'>, 'componentName'>;

export const Container: React.FC<Props> = props => (
  <MorfeoComponent componentName="Container" {...props} />
);
