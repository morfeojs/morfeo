import { component, Component } from '@morfeo/react';
import { paramCase } from 'change-case';
import { CodeTab } from '../types';

export function components(value: string, params?: any): CodeTab[] {
  const { variant } = params || {};
  const { tag } = component(value as Component).get() || {};
  const componentTag = tag || 'div';
  const variantStyle = variant ? `,\n  variant: "${variant}"` : '';

  return [
    {
      code: `const style = morfeo.resolve({
  componentName: "${value}"${variantStyle}
});`,
      label: 'Typescript',
      language: 'javascript',
    },
    {
      code: `<MorfeoComponent componentName="${value}" ${
        variant ? `variant="${variant}" ` : ''
      }/>`,
      label: 'React',
      language: 'javascript',
    },
    {
      code: `const style = useStyle({
  componentName: "${value}"${variantStyle}
});`,
      label: 'React (inline-style)',
      language: 'javascript',
    },
    {
      code: `const className = useClassName({
  componentName: "${value}"${variantStyle}
});`,
      label: 'React (with className)',
      language: 'javascript',
    },
    {
      code: `<${componentTag} class="morfeo-${paramCase(value)}${
        variant ? `-${paramCase(variant)}` : ''
      }" />`,
      label: 'HTML',
      language: 'html',
    },
  ];
}
