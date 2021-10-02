import * as fs from 'fs';
import * as path from 'path';

const MORFEO_STYLES_PATH = 'packages/cli/tests/tokens';

const componentPath = path.join(MORFEO_STYLES_PATH, 'Button.morfeo.ts');
const customComponentPath = path.join(MORFEO_STYLES_PATH, 'custom.morfeo.ts');
const colorsPath = path.join(MORFEO_STYLES_PATH, 'colors.morfeo.ts');
const customSlicePath = path.join(MORFEO_STYLES_PATH, 'customSlice.morfeo.ts');

export function makeMorfeoStyleFiles() {
  const darkThemePath = path.join(MORFEO_STYLES_PATH, 'darkTheme.js');

  const componentStyle = `export default {
  style: {
      bg: 'primary',
    }
  }
`;

  const customComponentStyle = `export const componentName = 'Custom';

export const theme = 'light';

export default {
  style: {
      bg: 'primary',
    }
  }
`;

  const colorsStyle = `export default {
  primary: 'black',
}
`;

  const customSliceStyle = `export const sliceName = 'spacings';
  
export default {
  xxs: '8px',
}
`;

  if (!fs.existsSync(MORFEO_STYLES_PATH)) {
    fs.mkdirSync(MORFEO_STYLES_PATH);
  }

  fs.writeFileSync(componentPath, componentStyle);
  fs.writeFileSync(customComponentPath, customComponentStyle);
  fs.writeFileSync(colorsPath, colorsStyle);
  fs.writeFileSync(customSlicePath, customSliceStyle);
  fs.writeFileSync(darkThemePath, 'module.exports = {};');
}
