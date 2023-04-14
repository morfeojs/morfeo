import { morfeo } from '@morfeo/web';
import { dynamicClasses } from '../src/utils/dynamicClasses';
import { theme } from './theme';

describe('dynamicClasses', () => {
  beforeAll(() => {
    morfeo.setTheme('default', theme);
  });

  it('should generate the classes', () => {
    const functionProperties = [
      {
        code: '({ variant }) => variant',
        property: 'variant',
        path: 'variant',
      },
      {
        code: '({ padding }) => props.padding',
        property: 'p',
        path: 'p.xs',
      },
      {
        code: '({ padding }) => props.padding',
        property: 'p',
        path: 'p',
      },
    ] as const;

    functionProperties.forEach(functionProperty => {
      const result = dynamicClasses.create(
        functionProperty.property,
        functionProperty.path,
        { componentName: 'Box' },
      );
    });
  });
});
