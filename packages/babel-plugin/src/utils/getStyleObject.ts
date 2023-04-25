import type { ObjectExpression } from '@babel/types';
import generator from '@babel/generator';
import { escapeString } from '@morfeo/utils';
import { isThemeableProperty, toJS } from '../utils';
import { DYNAMIC_VALUE_TOKEN } from '../constants';
import { Property, theme } from '@morfeo/web';

type StyleFunction = {
  code: string;
  property: string;
  variable: string;
};

type ThemeableStyleFunction = {
  code: string;
  path: string;
  property: Property;
};

export function getStyleObject(objectNode: ObjectExpression) {
  const styleFunctions: StyleFunction[] = [];
  const themeableStyleFunctions: ThemeableStyleFunction[] = [];

  const styleObject = toJS(objectNode, {
    resolveFunction({ path, property, node }) {
      const { code } = generator(node, {
        compact: true,
      });
      const parts = path.split('.');
      const variable = `--${escapeString(path)}`;
      const isResponsive = theme.isResponsive({ [property]: '' });
      // In case the values is responsive, the right property is the parent one.
      const propertyToCheck = isResponsive ? parts[parts.length - 2] : property;
      const isThemeable = isThemeableProperty(propertyToCheck);

      if (isThemeable) {
        themeableStyleFunctions.push({
          code,
          path,
          property: propertyToCheck,
        });
        return DYNAMIC_VALUE_TOKEN;
      }

      styleFunctions.push({
        code,
        property,
        variable,
      });

      return `var(${variable})`;
    },
  });

  return { styleObject, styleFunctions, themeableStyleFunctions };
}
