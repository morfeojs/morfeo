import { theme, parsers, ThemeKey } from '@morfeo/web';
import { paramCase } from 'change-case';
import { SLICES_TO_BE_PARSED } from '../constants';

function getVariableName(sliceName: string, value: string) {
  return `--${paramCase(`${sliceName}-${value}`)}`;
}

export function getCssValue(sliceName: string, attribute: string) {
  const toBeParsed = SLICES_TO_BE_PARSED.find(
    config => config.name === sliceName,
  );
  if (toBeParsed) {
    const style = parsers.resolve({
      [toBeParsed.styleProp]: attribute,
    });

    return style[toBeParsed.property];
  }
  // @ts-expect-error
  return theme.getValue(sliceName, attribute);
}

function getValue(sliceName: string, attribute: string) {
  const variableName = getVariableName(sliceName, attribute);

  const toBeParsed = SLICES_TO_BE_PARSED.find(
    config => config.name === sliceName,
  );
  return toBeParsed
    ? // @ts-expect-error
      theme.getValue(sliceName, attribute)
    : `var(${variableName})`;
}

export function parseSlice<Key extends ThemeKey>(sliceName: Key) {
  const slice = theme.getSlice(sliceName);
  const aliases = Object.keys(slice);
  let css: string[] = [];
  let object = {};

  aliases.forEach(curr => {
    const variableName = getVariableName(sliceName, curr);
    const cssValue = getCssValue(sliceName, curr);
    const value = getValue(sliceName, curr);

    object = {
      ...object,
      [curr]: value,
    };

    css.push(`\t${variableName}: ${cssValue};`);
  });

  return { css: css.join('\n') + '\n', object };
}
