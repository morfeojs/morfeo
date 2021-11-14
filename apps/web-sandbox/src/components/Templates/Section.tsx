import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Section'>, 'componentName'>;

export const Section: React.FC<Props> = props => (
  <MorfeoComponent componentName="Section" {...props} />
);
