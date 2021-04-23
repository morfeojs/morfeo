import { AllProperties } from './properties';
import { BaseTheme } from './theme';

export type VariantStyle = {
  [K in keyof AllProperties]?: keyof BaseTheme[AllProperties[K]];
};

export type ComponentStyle<V extends string = string> = VariantStyle & {
  variants: Record<V, VariantStyle>;
};

export interface Components {
  Button: ComponentStyle;
  Typography: ComponentStyle;
}

export type Component = keyof Components;
