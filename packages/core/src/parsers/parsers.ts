import { createParsers } from './createParsers';

export type ParserHandler = ReturnType<typeof createParsers>;
declare global {
  interface Window {
    __MORFEO_PARSERS: ParserHandler;
  }
  module NodeJS {
    interface Global {
      __MORFEO_PARSERS: ParserHandler;
    }
  }
}

export const parsers: ParserHandler =
  globalThis.__MORFEO_PARSERS || createParsers();
