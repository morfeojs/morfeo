import { Style } from '@morfeo/web';

export type ReducedStyle = Omit<Style, 'componentName' | 'variant' | 'state'>;
