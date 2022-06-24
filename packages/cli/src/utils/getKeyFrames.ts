import { getStyleSheet, theme } from '@morfeo/web';

function getKeyFramesStyle() {
  const currentTheme = theme.get();
  if (!currentTheme || !currentTheme.keyframes) {
    return {};
  }

  return Object.keys(currentTheme.keyframes).reduce(
    (acc, curr) => ({
      ...acc,
      [`@keyframes ${curr}`]: currentTheme.keyframes[curr],
    }),
    {},
  );
}

export function getKeyFrames() {
  const style = getKeyFramesStyle();
  const stylesheet = getStyleSheet({ '@global': style });
  return stylesheet.toString();
}
