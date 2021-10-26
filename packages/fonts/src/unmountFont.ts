export function unmountFont(name: string) {
  const currentFontStyle = document.getElementById(`font-${name}`);

  if (currentFontStyle) {
    currentFontStyle.remove();
  }
}
