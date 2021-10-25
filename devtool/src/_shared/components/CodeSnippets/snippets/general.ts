import { ThemeKey } from '@morfeo/react';
import { paramCase } from 'change-case';
import { CodeTab } from '../types';

type Params = {
  slice: ThemeKey;
  value: string;
  htmlTag?: string;
  property: string;
  cssProperty?: string;
};

export function general({
  slice,
  value,
  htmlTag = 'div',
  property,
  cssProperty,
}: Params): CodeTab[] {
  const cssProp = paramCase(cssProperty || property);
  return [
    {
      code: `const style = morfeo.resolve({ ${property}: "${value}" });`,
      label: 'Typescript',
      language: 'javascript',
    },
    {
      code: `const style = useStyle({ ${property}: "${value}" });`,
      label: 'React (inline-style)',
      language: 'javascript',
    },
    {
      code: `const className = useClassName({ ${property}: "${value}" });`,
      label: 'React (with className)',
      language: 'javascript',
    },
    {
      code: `.className {
  ${cssProp}: var(--${paramCase(slice)}-${paramCase(value || '')});
}`,
      label: 'CSS',
      language: 'css',
    },
    {
      code: `<${htmlTag} class="${paramCase(property)}-${paramCase(
        value || '',
      )}" />`,
      label: 'HTML',
      language: 'html',
    },
  ];
}
