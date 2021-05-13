import { Style } from './style';

type ComponentStyle<Props extends Style = Style> = {
  tag?: string;
  style: Style;
  props: Props;
};

export type ComponentConfig<
  Variant extends string = string,
  Props extends Style = Style,
> = ComponentStyle<Props> & {
  variants: Record<Variant, ComponentStyle<Props>>;
};
export interface Components {
  Box: ComponentConfig;
}

export type Component = keyof Components;

export type Variant<C extends Component> = keyof Components[C]['variants'];

export type ComponentProps<C extends Component = Component> = {
  componentName?: C;
  variant?: Variant<C>;
};
