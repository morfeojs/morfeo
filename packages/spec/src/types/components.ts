import { Style } from './style';
import { Color } from './colors';

export interface ComponentMeta {
  description?: string;
  tags?: string[];
  devtoolConfig?: {
    style?: Style;
    background?: Color | Record<string, Color>;
    label?: string;
    hide?: boolean;
  };
}

type ComponentStyle<Props extends Style = Style> = {
  tag?: string;
  style: Style;
  props?: Props;
  meta?: ComponentMeta;
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

type VariantMap = {
  [K in Component]: keyof Components[K]['variants'];
};

export type Variant<C extends Component = Component> =
  VariantMap[C] extends string ? VariantMap[C] : string;

export type ComponentProps<C extends Component = Component> = {
  componentName?: C;
  variant?: Variant<C>;
};
