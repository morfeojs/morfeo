import {
  theme,
  Style,
  Property,
  Component,
  component,
  allProperties,
} from '@morfeo/web';
import { CSSCollector } from './collector';

function getSliceFromProperty(property: Property) {
  return allProperties[property] || 'components';
}

function objectFromPaths<T>(paths: string[], value: T) {
  return paths.reduce((acc, curr, index) => {
    if (index === paths.length - 1) {
      return { ...acc, [curr]: value };
    }

    return {
      ...acc,
      [curr]: objectFromPaths(paths.slice(index + 1, paths.length), value),
    };
  }, {});
}

type GenerateCSSFromPropertyParams = {
  property: Property;
  path: string[];
  style: Style;
};

function generateCSSFromComponentName(
  componentName: Component,
  { path }: Pick<GenerateCSSFromPropertyParams, 'path'>,
) {
  function getStyleWithContext(style: Style) {
    if (path.length <= 1) {
      return style;
    }

    return objectFromPaths(path.slice(0, -1), style);
  }

  CSSCollector.add(getStyleWithContext({ componentName }));

  const componentOptions = component(componentName);
  const variants = Object.keys(componentOptions.getVariants() || {});
  const states = Object.keys(componentOptions.getStates() || {});

  for (const variant of variants) {
    CSSCollector.add(getStyleWithContext({ componentName, variant }));

    const variantOptions = component(componentName, variant);

    const variantStates = Object.keys(variantOptions.getStates() || {});

    for (const variantState of variantStates) {
      CSSCollector.add(
        getStyleWithContext({ componentName, variant, state: variantState }),
      );
    }
  }

  for (const state of states) {
    CSSCollector.add(getStyleWithContext({ componentName, state }));
  }
}

export function generateCSSFromProperty({
  property,
  path,
  style,
}: GenerateCSSFromPropertyParams) {
  const propertySlice = getSliceFromProperty(property);
  const themeSlice = theme.getSlice(propertySlice);
  const sliceKeys = Object.keys(themeSlice);

  if (style.componentName && ['variant', 'state'].includes(property)) {
    return generateCSSFromComponentName(style.componentName, {
      path,
    });
  }

  sliceKeys.forEach(key => {
    const styleFromPath = objectFromPaths([...path, property], key);
    CSSCollector.add(styleFromPath);
  });
}
