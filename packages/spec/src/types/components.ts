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

type ComponentStyle<
  Props extends Style = Style,
  State extends string = string,
> = {
  tag?: string;
  style: Style;
  props?: Props;
  meta?: ComponentMeta;
  states: Record<State, Style>;
};

export type ComponentConfig<
  Variant extends string = string,
  Props extends Style = Style,
  State extends string = string,
> = ComponentStyle<Props, State> & {
  variants: Record<Variant, ComponentStyle<Props>>;
};
export interface Components {
  Box: ComponentConfig;
}

export type Component = keyof Components;

type VariantMap = {
  [K in Component]: keyof Components[K]['variants'];
};

type StateMap = {
  [K in Component]: keyof Components[K]['states'];
};

export type Variant<C extends Component> = VariantMap[C] extends string
  ? VariantMap[C]
  : string;

export type State<C extends Component = Component> = StateMap[C] extends string
  ? StateMap[C]
  : string;

export type ComponentProps<C extends Component = Component> = {
  componentName?: C;
  variant?: Variant<C>;
  state?: State<C>;
};
