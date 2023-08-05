import * as fs from 'fs';
import * as path from 'path';
import { initPreset } from '@morfeo/preset-default';
import { collector } from '../src/collector';

jest.mock('fs');

beforeEach(() => {
  initPreset();
  jest.spyOn(fs, 'readFileSync')
    .mockReturnValue(`import { morfeo } from '@morfeo/css';
      const classes = morfeo.css({
        container: {
          bg: 'secondary',
        },
      });`);
});

it('should', () => {
  const entryPoint = path.join(__dirname, 'whatever.ts');
  collector.init({
    entryPoint,
  });
  collector.collect();

  console.log('');
});
