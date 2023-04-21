import * as fs from 'node:fs';
import * as path from 'node:path';
import { MORFEO_CSS_PATH, writer } from '../src/utils';

const fsAppendMock = jest.fn();
const fsWriteMock = jest.fn();

jest.mock('node:fs', () => ({
  ...jest.requireActual('node:fs'),
  writeFileSync: (...args: any[]) => fsWriteMock(...args),
  appendFileSync: (...args: any[]) => fsAppendMock(...args),
}));

describe('writer', () => {
  beforeEach(() => {
    if (fs.existsSync(MORFEO_CSS_PATH)) {
      fs.rmSync(MORFEO_CSS_PATH);
      fs.rmdirSync(path.dirname(MORFEO_CSS_PATH));
    }
    fsAppendMock.mockClear();
    fsWriteMock.mockClear();
    writer.reset();
  });

  it('should write into the file system in case of webpack', () => {
    writer.add('some css', 'webpack');

    expect(fsWriteMock).toHaveBeenCalledWith(
      MORFEO_CSS_PATH,
      'some css',
      expect.anything(),
    );
  });

  it('should append to the file when called multiple times with webpack', () => {
    writer.add('some css', 'webpack');
    writer.add('some css', 'webpack');

    expect(fsWriteMock).toHaveBeenCalledWith(
      MORFEO_CSS_PATH,
      'some css',
      expect.anything(),
    );

    expect(fsAppendMock).toHaveBeenCalledWith(
      MORFEO_CSS_PATH,
      'some css',
      expect.anything(),
    );
  });

  it('should return the file morfeo.css in case getImport is called with webpack', () => {
    const importPath = writer.getImport('fileName', 'webpack');

    expect(importPath).toBe(MORFEO_CSS_PATH);
  });
});
