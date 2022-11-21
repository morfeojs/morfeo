import { Color } from './colors';

export interface ColorSchemas {
  default: {
    [key in Color]: Color;
  };
}

export type ColorSchema = keyof ColorSchemas;

export interface ColorSchemaProps {
  colorSchema?: ColorSchema;
}
