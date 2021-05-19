import { parsers } from '@morfeo/core';
import { PseudosParserParams, PseudoProperty, PseudosParser } from '../types';
import { pseudosProperties } from '../properties';

type PseudoParsers = {
  [K in PseudoProperty]: PseudosParser<K>;
};

export function pseudos({ value, property }: PseudosParserParams) {
  const style = parsers.resolve(value);

  return {
    [property]: style,
  };
}

export const pseudosParses: PseudoParsers = pseudosProperties.reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: pseudos,
  }),
  {} as PseudoParsers,
);
