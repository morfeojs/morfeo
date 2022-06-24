import {
  theme,
  Style,
  ThemeKey,
  Property,
  getStyles,
  allProperties,
} from '@morfeo/web';
import { paramCase } from 'change-case';

function getPropertiesOfSlice(sliceName: string) {
  const keys = Object.keys(allProperties) as Property[];
  return keys.filter(key => allProperties[key] === sliceName);
}

function generateCss(className: string, style: Style) {
  const { sheet } = getStyles(
    { [className]: style },
    {
      generateId: () => className,
    },
  );

  return sheet.toString();
}

function getClasses(sliceName: string, value: string) {
  const properties = getPropertiesOfSlice(sliceName);

  const mapped = properties.map(property => {
    const className = `${paramCase(`${property}-${String(value)}`)}`;

    const style = { [property]: value };
    return generateCss(className, style);
  });

  return mapped;
}

export function getSliceClasses<Key extends ThemeKey>(sliceName: Key) {
  const slice = theme.getSlice(sliceName);
  const aliases = Object.keys(slice);

  const css = aliases.reduce((acc, curr) => {
    const classes = getClasses(sliceName, curr);

    const aliasCss = classes.reduce((acc, propertyCss) => {
      return `${acc}${propertyCss}\n`;
    }, '');

    return `${acc}${aliasCss}`;
  }, '');

  return css;
}

export function getClassesCSS() {
  const keys = Object.keys(theme.get()) as ThemeKey[];

  const css = keys.reduce((acc, curr) => {
    const sliceCss = getSliceClasses(curr);
    return `${acc}${sliceCss}`;
  }, '');

  return css;
}
