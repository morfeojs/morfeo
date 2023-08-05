import { initPreset } from '@morfeo/preset-default';
import { collector } from './collector';

initPreset();

collector.init({
  entryPoint: './fileName.ts',
});

collector.collect();
