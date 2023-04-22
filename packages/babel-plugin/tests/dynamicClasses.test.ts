import { morfeo } from '@morfeo/web';
import { dynamicClasses } from '../src/utils/dynamicClasses';
import { theme } from './theme';

describe('dynamicClasses', () => {
  beforeAll(() => {
    morfeo.setTheme('default', theme);
  });

  it('should generate all the possible classes for each property', () => {
    const functionProperties = [
      {
        code: '({ variant }) => variant',
        property: 'variant',
        path: 'variant',
        expected: { bordered: 'bg-primary border-strong' },
      },
      {
        code: '({ padding }) => props.padding',
        property: 'p',
        path: 'p.xs',
        expected: { s: 'p-xs-s', m: 'p-xs-m', l: 'p-xs-l' },
      },
      {
        code: '({ padding }) => props.padding',
        property: 'p',
        path: 'p',
        expected: { s: 'p-s', m: 'p-m', l: 'p-l' },
      },
    ] as const;

    functionProperties.forEach(functionProperty => {
      const result = dynamicClasses.create(
        functionProperty.property,
        functionProperty.path,
        { componentName: 'Box' },
      );

      expect(result).toEqual(functionProperty.expected);
    });
  });
});
