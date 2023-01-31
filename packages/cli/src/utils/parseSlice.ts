import { Theme, theme, parsers, ThemeKey, Style } from '@morfeo/web';
import { paramCase } from 'change-case';
import { SLICES_TO_BE_PARSED } from '../constants';

function getVariableName<Key extends ThemeKey>(
  sliceName: Key,
  value: keyof Theme[Key],
) {
  return `--${paramCase(`${sliceName}-${String(value)}`)}`;
}

export function getCssValue<Key extends ThemeKey>(
  sliceName: Key,
  attribute: keyof Theme[Key],
) {
  const toBeParsed = SLICES_TO_BE_PARSED.find(
    config => config.name === sliceName,
  );
  if (toBeParsed) {
    // @ts-ignore
    const style = parsers.resolve({
      [toBeParsed.styleProp]: attribute,
    });

    return style[toBeParsed.property];
  }

  return theme.getValue(sliceName, attribute);
}

function getValue<Key extends ThemeKey>(
  sliceName: Key,
  attribute: keyof Theme[Key],
) {
  const variableName = getVariableName(sliceName, attribute);

  const toBeParsed = SLICES_TO_BE_PARSED.find(
    config => config.name === sliceName,
  );
  return toBeParsed
    ? theme.getValue(sliceName, attribute)
    : `var(${variableName})`;
}

export function parseSlice<Key extends ThemeKey>(sliceName: Key) {
  const slice = theme.getSlice(sliceName);
  const aliases = Object.keys(slice) as (keyof Theme[Key])[];
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
