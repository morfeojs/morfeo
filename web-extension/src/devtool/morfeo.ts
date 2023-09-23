import { createMorfeo } from '@morfeo/react';
import { createMorfeoJSS } from '@morfeo/jss';

export const morfeo = createMorfeo();

export const jss = createMorfeoJSS(morfeo);
