import { Style } from '@morfeo/core';
import { PseudoProperty } from './types';

type PseudoStyle = {
  [K in PseudoProperty]?: Style;
};

declare module '@morfeo/core' {
  export interface Style extends PseudoStyle {}
}
