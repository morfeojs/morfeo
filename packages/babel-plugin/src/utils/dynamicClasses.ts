import {
  theme,
  Style,
  Property,
  ThemeKey,
  allPropertiesBySlice,
  component,
} from '@morfeo/web';
import { css } from './css';
import { getStyleFromPath } from './getStyleFromPath';

function createDynamicClasses() {
  const propertyToSliceCache = new Map<Property, ThemeKey>();

  function getThemeSliceByProperty(property: Property) {
    if (propertyToSliceCache.has(property)) {
      return propertyToSliceCache.get(property) as ThemeKey;
    }

    const sliceName = Object.keys(allPropertiesBySlice).find(name =>
      allPropertiesBySlice[name].includes(property),
    ) as ThemeKey;

    propertyToSliceCache.set(property, sliceName);

    return sliceName;
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
        const style = getStyleFromPath(path, variantOrState);
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
      const style = getStyleFromPath(path, sliceKey);

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
