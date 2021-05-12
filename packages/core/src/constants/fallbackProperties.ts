import { allProperties } from './allProperties';

export const FALLBACK_PARSERS = allProperties.reduce(
  (acc, curr) => ({
    ...acc,
    [curr]: ({ value }) => ({ [curr]: value }),
  }),
  {},
);
