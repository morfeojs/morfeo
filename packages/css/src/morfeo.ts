import { css } from './css';
import { global } from './global';

const instance = { css, global };

type LocalMorfeoType = typeof instance;

export interface Morfeo extends LocalMorfeoType {}

export const morfeo: Morfeo = instance;
