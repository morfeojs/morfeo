import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Page'>, 'componentName'>;

export const Page: React.FC<Props> = props => (
  <MorfeoComponent componentName="Page" {...props} />
);
