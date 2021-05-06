import { Style } from '@morfeo/core';
import { Properties } from 'csstype';
import { PseudoProperty } from './pseudos';

type WebStyle = Properties<string | number> &
  {
    [K in PseudoProperty]?: Style;
  };

declare module '@morfeo/core' {
  export interface CustomStyle extends WebStyle {}
}
