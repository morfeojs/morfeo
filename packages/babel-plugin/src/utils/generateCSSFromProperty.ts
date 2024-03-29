import { Style, Property, Component, allProperties, Morfeo } from '@morfeo/web';
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
  morfeo: Morfeo;
};

function generateCSSFromComponentName(
  morfeo: Morfeo,
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

  const componentOptions = morfeo.theme.component(componentName);
  const variants = Object.keys(componentOptions.getVariants() || {});
  const states = Object.keys(componentOptions.getStates() || {});

  for (const variant of variants) {
    CSSCollector.add(getStyleWithContext({ componentName, variant }));

    const variantOptions = morfeo.theme.component(componentName, variant);

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
  morfeo,
}: GenerateCSSFromPropertyParams) {
  const isResponsive =
    path.length > 0 && !!morfeo.theme.getSlice('breakpoints')[property];
  const propertySlice = getSliceFromProperty(
    isResponsive ? (path[path.length - 2] as Property) : property,
  );
  const themeSlice = morfeo.theme.getSlice(propertySlice);
  const sliceKeys = Object.keys(themeSlice);

  if (style.componentName && ['variant', 'state'].includes(property)) {
    return generateCSSFromComponentName(morfeo, style.componentName, {
      path,
    });
  }

  sliceKeys.forEach(key => {
    const styleFromPath = objectFromPaths([...path, property], key);
    CSSCollector.add(styleFromPath);
  });
}
