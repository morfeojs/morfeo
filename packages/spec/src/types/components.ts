import { Style } from './style';

type ComponentStyle = Style & {
  componentTag?: string;
};

export type ComponentConfig<
  Variant extends string = string,
  Props extends Style = Style,
> = {
  style: ComponentStyle;
  props: Props;
  variants: Record<Variant, ComponentStyle>;
};
export interface Components {
  Box: ComponentConfig;
}

export type Component = keyof Components;

export type ComponentProps<C extends Component = Component> = {
  componentName?: C;
  variant?: keyof Components[C]['variants'];
};
