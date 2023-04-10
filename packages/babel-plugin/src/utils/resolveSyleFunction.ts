import {
  allPropertiesBySlice,
  allProperties,
  theme,
  ThemeKey,
  Style,
} from '@morfeo/web';
import generator from '@babel/generator';
import { ArrowFunctionExpression, FunctionExpression } from '@babel/types';
import { escapeString } from '@morfeo/utils';
import { getClassesAndCSS } from './getClassesAndCSS';

type Params = {
  property: string;
  path: string;
  node: FunctionExpression | ArrowFunctionExpression;
  style: Style;
};

function getCSSVariableName(path: string) {
  const variable = `--${escapeString(path)}`;

  return `var(${variable})`;
}

export function resolveStyleFunction({ property, path, node }: Params) {
  const isThemeableProperty = !!allProperties[property];
  const { code } = generator(node, {
    compact: true,
  });
  const valueGetter = `(${code})(props)`;

  if (!isThemeableProperty) {
    const variableName = getCSSVariableName(path);
    return { style: { [variableName]: valueGetter } };
  }

  const themeKey = Object.keys(allPropertiesBySlice).find(slice =>
    slice.includes(property),
  ) as ThemeKey;

  const themeSlice = theme.getSlice(themeKey);

  // Check if the property is componentName, variant or state and treat those differently

  // otherwise
  const allPossibleStylesForThemeSlice = Object.keys(themeSlice).map(
    themeValue => {
      const style = { [property]: themeValue } as any as Style;
      const { css, classes } = getClassesAndCSS({ style });
      const valueClassName = classes.style;
      return { themeValue, className: valueClassName, css };
    },
  );

  const classesMap = allPossibleStylesForThemeSlice.reduce(
    (acc, curr) => ({ ...acc, [curr.themeValue]: curr.className }),
    {},
  );

  const css = allPossibleStylesForThemeSlice.reduce(
    (acc, css) => `${acc}\n${css}`,
    '',
  );

  return { css, className: classesMap[valueGetter] };
}
