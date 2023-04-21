import { Style } from '@morfeo/web';

function createStyleFromPath() {
  const pathToStyleCache = new Map<string, Style>();

  function getStyleFromPath(path: string, value: any): Style {
    const cacheKey = `${path}-${value}`;
    if (pathToStyleCache.has(cacheKey)) {
      return pathToStyleCache.get(cacheKey) as Style;
    }

    const [first, ...rest] = path.split('.');

    const style = {
      [first]:
        rest.length > 0 ? getStyleFromPath(rest.join('.'), value) : value,
    };

    pathToStyleCache.set(cacheKey, style);

    return style;
  }

  return getStyleFromPath;
}

export const getStyleFromPath = createStyleFromPath();
