import { Property, allProperties } from '@morfeo/web';

const componentProperties = ['componentName', 'variant', 'state'];

export function isThemeableProperty(property: string): property is Property {
  return !!allProperties[property] || componentProperties.includes(property);
}
