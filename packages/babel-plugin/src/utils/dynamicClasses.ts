import {
  theme,
  Style,
  Property,
  ThemeKey,
  allPropertiesBySlice,
  component,
} from '@morfeo/web';
import { css } from './css';

function createDynamicClasses() {
  const propertyToSliceCache = new Map<Property, ThemeKey>();
  const pathToStyleCache = new Map<string, Style>();

  function getThemeSliceByProperty(property: Property) {
    if (propertyToSliceCache.has(property)) {
      return propertyToSliceCache.get(property) as ThemeKey;
    }

    const sliceName = Object.keys(allPropertiesBySlice).find(sliceName =>
      allPropertiesBySlice[sliceName].includes(property),
    ) as ThemeKey;

    propertyToSliceCache.set(property, sliceName);

    return sliceName;
  }

  function createStyleFromPath(path: string, value: any): Style {
    const cacheKey = `${path}-${value}`;
    if (pathToStyleCache.has(cacheKey)) {
      return pathToStyleCache.get(cacheKey) as Style;
    }

    const [first, ...rest] = path.split('.');

    const style = {
      [first]:
        rest.length > 0 ? createStyleFromPath(rest.join('.'), value) : value,
    };

    pathToStyleCache.set(cacheKey, style);

    return style;
  }

  function createComponentClasses(
    property: 'variant' | 'state',
    path: string,
    completeStyle: Style,
  ) {
    const componentInfo = component(completeStyle.componentName!);

    const variantsOrStates =
      componentInfo.get()[property === 'variant' ? 'variants' : 'states'];

    const classes = Object.keys(variantsOrStates).reduce(
      (acc, variantOrState) => {
        const style = createStyleFromPath(path, variantOrState);
        const className = css.add({
          componentName: completeStyle.componentName,
          ...(completeStyle.state ? { state: completeStyle.state } : {}),
          ...(completeStyle.variant ? { variant: completeStyle.variant } : {}),
          ...style,
        });

        return {
          ...acc,
          [variantOrState]: className,
        };
      },
      {},
    );

    return classes;
  }

  function create(property: string, path: string, completeStyle: Style) {
    if (property === 'variant' || property === 'state') {
      return createComponentClasses(property, path, completeStyle);
    }

    const sliceName = getThemeSliceByProperty(property as Property);
    const slice = theme.getSlice(sliceName);
    const sliceKeys = Object.keys(slice);
    const classes = sliceKeys.reduce((acc, sliceKey) => {
      const style = createStyleFromPath(path, sliceKey);

      return {
        ...acc,
        [sliceKey]: css.add(style),
      };
    }, {});

    return classes;
  }

  return { create };
}

export const dynamicClasses = createDynamicClasses();
