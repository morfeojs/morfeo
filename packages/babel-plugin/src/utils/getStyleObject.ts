import type { ObjectExpression } from '@babel/types';
import { escapeString } from '@morfeo/utils';
import { Property, parsers, theme } from '@morfeo/web';
import { toJS } from './toJS';

export function getStyleObject(objectNode: ObjectExpression) {
  const themableStyles: { property: Property; path: string[] }[] = [];
  const styleObject = toJS(objectNode, {
    resolveFunction({ path, property }) {
      const parts = path.split('.');
      const isResponsive = theme.isResponsive({ [property]: '' });
      // In case the values is responsive, the right property is the parent one.
      const propertyToCheck = isResponsive ? parts[parts.length - 2] : property;
      const isThemeable = parsers.isThemeableProperty(propertyToCheck);

      if (isThemeable) {
        themableStyles.push({ property: property as Property, path: parts });
        return {};
      }

      return { [property]: `var(--${escapeString(path)})` };
    },
  });

  return { styleObject, themableStyles };
}
