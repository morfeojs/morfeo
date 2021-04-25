import { ComponentProps } from './components';
import { AllProperties, Property } from './properties';
import { Theme } from './theme';

type BaseStyle = {
  [K in Property]?: keyof Theme[AllProperties[K]];
} &
  ComponentProps;

export interface Style extends BaseStyle {}
