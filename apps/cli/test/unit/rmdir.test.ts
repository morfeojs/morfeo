import { expect } from '@oclif/test';
import * as path from 'path';
import * as fs from 'fs';
import { rmdir } from '../../src/utils/rmdir';

const DIR_PATH = path.join(__dirname, './__FAKE_FOLDER_TEST__');
const NOT_EXISTING_DIRECTORY = path.join(
  __dirname,
  './__FAKE_FOLDER_TEST__1__',
);

describe('rmdir', () => {
  beforeEach(() => {
    if (fs.existsSync(DIR_PATH)) {
      fs.mkdirSync(DIR_PATH);
    }
  });

  afterEach(() => {
    rmdir(DIR_PATH);
  });

  it('should remove an existing directory', () => {
    rmdir(DIR_PATH);
    expect(fs.existsSync(DIR_PATH)).to.be.false;
  });

  it('should not do anything if the directory does not exist', () => {
    rmdir(NOT_EXISTING_DIRECTORY);
    expect(fs.existsSync(NOT_EXISTING_DIRECTORY)).to.be.false;
  });
});
