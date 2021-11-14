import { MorfeoComponent, MorfeoComponentProps } from '../MorfeoComponent';

type Props = Omit<MorfeoComponentProps<'Input'>, 'componentName'>;

export const Input: React.FC<Props> = props => {
  return <MorfeoComponent componentName="Input" {...props} />;
};
