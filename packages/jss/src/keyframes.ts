import { theme } from '@morfeo/core';
import { getKeyFramesStyle } from './getKeyframesStyle';
import { getStyleElement } from './getStyleElement';
import { getStyleSheet } from './getStyles';

function updateKeyframesOnThemeChanges(newTheme: any) {
  const style = getKeyFramesStyle(newTheme);
  const styleElement = getStyleElement();
  if (style && styleElement) {
    const stylesheet = getStyleSheet({ '@global': style });
    const globalCSS = stylesheet.toString();
    styleElement.innerHTML = globalCSS;
  }
}
theme.subscribe(updateKeyframesOnThemeChanges);
