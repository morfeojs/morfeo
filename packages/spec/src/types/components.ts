import { Style } from './style';

type ComponentStyle = Style & {
  componentTag?: string;
};

export type ComponentConfig<
  T extends string = string,
  V extends string = string
> = {
  style: ComponentStyle;
  variants?: Record<V, ComponentStyle>;
};
export interface Components {
  Button: ComponentConfig;
  Typography: ComponentConfig;
}

export type Component = keyof Components;

export type ComponentProps<C extends Component = Component> = {
  componentName?: C;
  // variant?: keyof Components[C]['variants'];
  variant?: string;
};
